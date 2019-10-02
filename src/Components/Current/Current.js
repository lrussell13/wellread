import React from 'react';
import Nav from '../Nav/Nav';
import { Link, withRouter } from 'react-router-dom';
import UserBookServices from '../Services/user-books-services';
import './Current.css';

class Current extends React.Component {
    state = {
        current: [],
      }
    
    getBooks = () => {
        UserBookServices.getUsersBooks()
        .then(res => res.json())
        .then(books => {
            let current = books.filter(book => book.book_status === 2);
    
            this.setState({ current });
        })
    }

    chooseImage(book){
        if(book.cover_i){
            return <img className="Current-book" src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} alt={book.title}></img>
        }

        if(book.oclc){
            return <img className="Current-book" src={`https://covers.openlibrary.org/b/oclc/${book.oclc}-M.jpg`} alt={book.title}></img>
        }

        if(book.isbn){
            return <img className="Current-book" src={`https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`} alt={book.title}></img>
        }

        return "";
    }

    onDelete(e, id){
        e.preventDefault();

        UserBookServices.deleteUserBooks(id)
        .then(() => this.props.history.push('/user/current'))
    }

    componentDidMount(){
        this.getBooks();
    }

    render(){
        return (
            <>
            <Nav />
            <h1>Current</h1>  
            {this.state.current.map((book, i) => {
                return (
                    <div key={i} className="toread-book-holder">
                    <h3>{book.title} - {book.author}</h3>
                    <div className="container">
                        {this.chooseImage(book)}
                    </div>
                    <div className="links">
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

export default withRouter(Current);