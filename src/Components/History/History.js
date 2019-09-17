import React from 'react';
import Nav from '../Nav/Nav';
import demo from '../../images/demo.jpg';
import './History.css';

class History extends React.Component {
    state = {
        history: [
            {title: "Title 1", author: "Author 1", rating: 4, notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
            {title: "Title 2", author: "Author 2", rating: 3, notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
            {title: "Title 3", author: "Author 3", rating: 5, notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
        ]
    }

    createRating(rating){
        let ratingCircles = [];

        for(let i = 0; i < 5; i++) {
            let name = "rating-circle";
            
            if(i < rating){
                name += " green";
            }

            ratingCircles.push(<div className={name}></div>)
        }

        return ratingCircles;
    }

    render(){
        return (
            <>
            <Nav />
            <h1>My History</h1>  
            {this.state.history.map(book => {
                return (
                    <>
                    <h3>{book.title} - {book.author}</h3>
                    <div className="container">
                        <div className="rating-holder">
                            {this.createRating(book.rating)}
                        </div>
                        <div className="image-text-holder">
                            <div className="left">
                                {book.notes}
                            </div>
                            <div className="right">
                                <img className="book" src={demo} alt={book.title}></img>
                            </div>
                        </div>
                    </div>
                    </>
            )})}
            </>
        )
    }
}

export default History;