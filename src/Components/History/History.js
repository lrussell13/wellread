import React from 'react';
import Nav from '../Nav/Nav';
import { Link, withRouter} from 'react-router-dom';
import UserBookServices from '../Services/user-books-services';
import './History.css';

class History extends React.Component {
    state = {
        history: [],
    }
    
    getBooks = () => {
        UserBookServices.getUsersBooks()
        .then(res => res.json())
        .then(books => {
            let history = books.filter(book => book.book_status === 3);
    
            this.setState({ history });
        })
    }

    chooseImage(book){
        if(book.cover_i){
            return <img className="history-book" src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} alt={book.title}></img>
        }

        if(book.oclc){
            return <img className="history-book" src={`https://covers.openlibrary.org/b/oclc/${book.oclc}-M.jpg`} alt={book.title}></img>
        }

        if(book.isbn){
            return <img className="history-book" src={`https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`} alt={book.title}></img>
        }

        return "";
    }
    
    componentDidMount(){
        this.getBooks();
    }

    onDelete(e, id){
        e.preventDefault();

        UserBookServices.deleteUserBooks(id)
        .then(() => this.props.history.push('/user/history'))
    }

    createRating(rating){
        let ratingCircles = [];

        for(let i = 0; i < 5; i++) {
            let name = "rating-circle";
            
            if(i < rating){
                name += " green";
            }

            ratingCircles.push(<div key={i} className={name}></div>)
        }

        return ratingCircles;
    }

    render(){
        return (
            <>
            <Nav />
            <h1>My History</h1>  
            {this.state.history.map((book, i)=> {
                return (
                    <div key={i}>
                    <h3>{book.title} - {book.author}</h3>
                    <div className="history-container">
                        <div className="rating-holder">
                            {this.createRating(book.rating)}
                        </div>
                        <div className="image-text-holder">
                            <div className="left">
                                {book.notes}
                            </div>
                            <div className="right">
                                {this.chooseImage(book)}
                            </div>
                        </div>
                        <div className="button-holder">
                            <Link to={`/finish/${book.id}`}>
                            <button className="delete button">Edit</button>
                            </Link>
                            <button onClick={e => this.onDelete(e, book.id)} className="delete button">Delete</ button>
                        </div>
                    </div>
                    </div>
            )})}
            </>
        )
    }
}

export default withRouter(History);