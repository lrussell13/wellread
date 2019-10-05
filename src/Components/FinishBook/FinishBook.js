import React from 'react';
import UserBookServices from '../Services/user-books-services';
import { withRouter } from 'react-router-dom';
import './FinishBook.css';

class FinishBook extends React.Component {
    state = {
        book: [],
        rating: 0,
        notes: ""
    }

    getBook = () => {
        UserBookServices.getUserBookById(this.props.id)
        .then(res => res.json())
        .then(book => this.setState({ book: book[0], rating: book[0].rating, notes: book[0].notes}))
    }

    componentDidMount(){
        this.getBook()
    }

    updateRating = (e) => {
        e.preventDefault();
        let rating = e.target.value;
        this.setState({rating});
    }
    
    updateText = (e) => {
        e.preventDefault();
        let notes = e.target.value;
        this.setState({ notes });
    }

    createRating(rating){
        let ratingCircles = [];

        for(let i = 0; i < 5; i++) {
            let name = "rating-circle";
            
            if(i < rating){
                name += " green";
            }

            ratingCircles.push(<button onClick={e => this.updateRating(e)} key={i} value={i + 1} className={name}></button>)
        }

        return ratingCircles;
    }
    
    onSubmit(e){
        e.preventDefault();
        const updatedUserBook = {
            rating: this.state.rating,
            notes: this.state.notes,
            book_status: 3
        }

        UserBookServices.patchUserBook(updatedUserBook, this.props.id)
        .then(res =>  {
            this.props.history.push(`/user`)
        })
    }

    render(){
        return (
            <div className="finish-book">
              <section className="finish-form">
                  <form onSubmit={(e) => this.onSubmit(e)} className="finish-book-form">
                        <h4>{this.state.book.title}</h4>
                        <h4>{this.state.book.author}</h4>
                        <label htmlFor="rating-holder">Rating</label>
                        <div id="rating-holder" className="rating-holder">
                            {this.createRating(this.state.rating)}
                        </div>
                        <label htmlFor="notes">Notes</label>
                        <textarea onChange={(e) => this.updateText(e)} rows="12" cols="25" value={this.state.notes}></textarea>
                      <button type="submit">Submit</button>
                  </form>
              </section>
            </div>
        );
    }
}

export default withRouter(FinishBook);