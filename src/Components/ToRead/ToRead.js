import React from 'react';
import Nav from '../Nav/Nav';
import demo from '../../images/demo.jpg';
import { Link } from 'react-router-dom';
import './ToRead.css';

class ToRead extends React.Component {
    state = {
        toRead: [
            {title: "Title 1", author: "Author 1", rating: 4, notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
            {title: "Title 2", author: "Author 2", rating: 3, notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
            {title: "Title 3", author: "Author 3", rating: 5, notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
        ]
    }

    render(){
        return (
            <>
            <Nav />
            <h1>To Read</h1>  
            {this.state.toRead.map((book, i) => {
                return (
                    <div key={i} className="toread-book-holder">
                    <Link to="/finish">
                    <h3>{book.title} - {book.author}</h3>
                    <div className="container">
                        <img className="toread-book" src={demo} alt={book.title}></img>
                    </div>
                    </Link>
                    </div>
            )})}
            </>
        )
    }
}

export default ToRead;