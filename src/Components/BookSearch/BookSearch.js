import React from 'react';
import Nav from '../Nav/Nav';
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
            fetch(`http://openlibrary.org/search.json?q=${this.state.searchType}:${searchTerm}&limit=10`)
            .then(results => results.json())
            .then(resultsJSON => this.setState({books: resultsJSON.docs}))
        }
    }

    componentWillUnmount(){
        document.removeEventListener('blur', this.getBooks);
    }

    chooseImage(book){
        if(book.cover_i){
            return <img src={`http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} alt={book.title}></img>
        }

        if(book.oclc){
            return <img src={`http://covers.openlibrary.org/b/oclc/${book.oclc}-M.jpg`} alt={book.title}></img>
        }

        if(book.isbn){
            return <img src={`http://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`} alt={book.title}></img>
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

    render(){
        return (
            <>
            <Nav />
            <div className="book-search">
            <form >
                <div className="searchTypeHolder">
                    <div className={this.chooseSearchTypeClass('title')} onClick={() => this.changeSearchType('title')}>Title</div>
                    <div className={this.chooseSearchTypeClass('author')} onClick={() => this.changeSearchType('author')}>Author</div>
                </div>
                <input className="book-search-input" onChange={e => this.updateSearchTerm(e)} value={this.state.searchTerm}></input>
            </form>
            {this.state.books.map((book, i) => {
                return (
                    <div key={`${i}${book.title}`} className="book">
                        <h3>{book.title}</h3>
                        {book.author_name ? book.author_name.map(author => <h4 key={i}>by {author}</h4>): ""}
                        {this.chooseImage(book)} 
                    </div>
                )
            })}
            </div>
            </>
        )
    }
}

export default BookSearch