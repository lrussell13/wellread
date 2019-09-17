import React from 'react';
import Nav from '../Nav/Nav';
import './BookSearch.css';

class BookSearch extends React.Component {
    state = {
        searchTerm: '',
        books: []
    }

    updateSearchTerm(e){
        e.preventDefault();

        let searchTerm = e.target.value; 

        this.setState({searchTerm});
    }

    getBooks(){
        if(this.state.searchTerm.length > 3){
            fetch(`http://openlibrary.org/search.json?q=title:${this.state.searchTerm}&limit=10`)
            .then(results => results.json())
            .then(resultsJSON => this.setState({books: resultsJSON.docs}))
        }
    }

    render(){
        return (
            <>
            <Nav />
            <div className="book-search">
            <form onBlur={this.getBooks()}>
                <input onChange={e => this.updateSearchTerm(e)} value={this.state.searchTerm}></input>
            </form>
            {this.state.books.map((book, i) => {
                return (
                    <div key={i} className="book">
                        <h3>{book.title}</h3>
                        {book.author_name ? book.author_name.map(author => <h4>by {author}</h4>): ""}
                        <img src={`http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} alt={book.title}></img>
                    </div>
                )
            })}
            </div>
            </>
        )
    }
}

export default BookSearch