import React from 'react';
import Nav from '../Nav/Nav';
import { withRouter } from 'react-router-dom';
import bookService from '../Services/book-service';
import UserBookService from '../Services/user-books-services';
import './BookSearch.css';

class BookSearch extends React.Component {
    state = {
        searchTerm: '',
        searchType: 'title',
        books: []
    }

    updateSearchTerm(e){
        e.preventDefault();

        let searchTerm = e.target.value; 

        this.setState({searchTerm});

        if(searchTerm.length > 3){
            fetch(`https://openlibrary.org/search.json?q=${this.state.searchType}:${searchTerm}&limit=10`)
            .then(results => results.json())
            .then(resultsJSON => this.setState({books: resultsJSON.docs}))
        }
    }

    chooseImage(book){
        if(book.cover_i){
            return <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} alt={book.title}></img>
        }

        if(book.oclc){
            return <img src={`https://covers.openlibrary.org/b/oclc/${book.oclc}-M.jpg`} alt={book.title}></img>
        }

        if(book.isbn){
            return <img src={`https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`} alt={book.title}></img>
        }

        return "";
    }

    changeSearchType(type){
        this.setState({searchType: type});
    }

    chooseSearchTypeClass(type){
        if(this.state.searchType === type){
            return "searchType blue";
        }
        return "searchType";
    }

    onButtonClick(e, type){
        let i = e.target.value
        
        let book = {
            title: this.state.books[i].title,
            author: this.state.books[i].author_name[0]
        }

        if(this.state.books[0].cover_i){
            book.cover_i = this.state.books[0].cover_i
        }

        if(this.state.books[0].oclc){
            book.oclc = this.state.books[0].oclc[0]
        }

        if(this.state.books[0].isbn){
            book.isbn = this.state.books[0].isbn[0]
        }

        bookService.insertBook(book)
        .then(res => res.json())
        .then(book => {
            let id = book.id;

            if(type === 'current'){
                const userBook = {
                    book_id: id,
                    book_status: 2,
                }
                UserBookService.insertUserBook(userBook)
            }

            if(type === 'toRead'){
                const userBook = {
                    book_id: id,
                    book_status: 1,
                }
                UserBookService.insertUserBook(userBook)
            }

            if(type === 'finish'){
                const userBook = {
                    book_id: id,
                    book_status: 3,
                }
                UserBookService.insertUserBook(userBook)
                .then(res => res.json())
                .then(userBook => this.props.history.push(`/finish/${userBook.id}`))
            }

        })
    }

    render(){
        return (
            <>
            <Nav/>
            <div className="book-search">
            <form >
                <div className="searchTypeHolder">
                    <div className={this.chooseSearchTypeClass('title')} onClick={() => this.changeSearchType('title')}>Title</div>
                    <div className={this.chooseSearchTypeClass('author')} onClick={() => this.changeSearchType('author')}>Author</div>
                </div>
                <input className="book-search-input" onChange={e => this.updateSearchTerm(e)} value={this.state.searchTerm}></input>
            </form>
            <div className="results">
            {this.state.books.map((book, i) => {
                return (
                    <div key={`${book.title + i}`} className="book">
                        <h3>{book.title}</h3>
                        {book.author_name ? book.author_name.map(author => <h4 key={i + author}>by {author}</h4>): ""}
                        {this.chooseImage(book)} 
                        <div className="links">
                            <button onClick={(e) => this.onButtonClick(e, "finish")} value={i} className="finish button">Finished</ button>
                            <button onClick={(e) => this.onButtonClick(e, "current")} value={i} className="current button">Current</ button>
                            <button onClick={(e) => this.onButtonClick(e, "toRead")} value={i} className="toRead button">To Read</ button>
                        </div>
                    </div>
                )
            })}
            </div>
            </div>
            </>
        )
    }
}

export default withRouter(BookSearch);