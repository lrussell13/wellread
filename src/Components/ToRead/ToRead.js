import React from 'react';
import Nav from '../Nav/Nav';
import { Link, withRouter } from 'react-router-dom';
import UserBookServices from '../Services/user-books-services';
import './ToRead.css';

class ToRead extends React.Component {
    state = {
        toRead: []
    }
    
    chooseImage(book){
        if(book.cover_i){
            return <img className="toread-book" src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} alt={book.title}></img>
        }

        if(book.oclc){
            return <img className="toread-book" src={`https://covers.openlibrary.org/b/oclc/${book.oclc}-M.jpg`} alt={book.title}></img>
        }

        if(book.isbn){
            return <img className="toread-book" src={`https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`} alt={book.title}></img>
        }

        return "";
    }
    
    getBooks = () => {
        UserBookServices.getUsersBooks()
        .then(res => res.json())
        .then(books => {
            let toRead = books.filter(book => book.book_status === 1);    
            this.setState({toRead});
        })
    }

    updateBook(e, id){
        e.preventDefault();

        const updatedUserBook = {
            book_status: 2
        }

        UserBookServices.patchUserBook(updatedUserBook, id)
        .then(() => this.props.history.push('/user/toread'))
    }

    onDelete(e, id){
        e.preventDefault();

        UserBookServices.deleteUserBooks(id)
        .then(() => this.props.history.push('/user/toread'))
    }

    componentDidMount(){
        this.getBooks();
    }

    render(){
        return (
            <>
            <Nav />
            <h1>To Read</h1>  
            {this.state.toRead.map((book, i) => {
                return (
                    <div key={i} className="toread-book-holder">
                    <h3>{book.title} - {book.author}</h3>
                    <div className="container">
                        {this.chooseImage(book)}
                    </div>
                    <div className="links">
                        <button onClick={e => this.updateBook(e, book.id)} className="current button">Current</ button>
                        <Link to={`/finish/${book.id}`}>
                        <button className="finish button">Finish</ button>
                        </Link>
                        <button onClick={e => this.onDelete(e, book.id)} className="delete button">Delete</ button>
                    </div>
                    </div>
            )})}
            </>
        )
    }
}

export default withRouter(ToRead);