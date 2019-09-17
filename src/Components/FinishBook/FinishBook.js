import React from 'react';
import './FinishBook.css';

class FinishBook extends React.Component {
    state = {
        rating: 3,
        title: "Title 1",
        author: "Author 1"
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
            <div className="finish-book">
              <section className="finish-form">
                  <form>
                        <label htmlFor="title">Title</label>
                        <h4>{this.state.title}</h4>
                        <label htmlFor="author">Author</label>
                        <h4>{this.state.author}</h4>
                        <label htmlFor="dateBegan">Date Began</label>
                        <input id="dateBegan" type="date"/>
                        <label htmlFor="dateFinished">Date Finished</label>
                        <input id="dateFinished" type="date"/>
                        <label htmlFor="rating-holder">Rating</label>
                        <div id="rating-holder" className="rating-holder">
                            {this.createRating(this.state.rating)}
                        </div>
                        <label htmlFor="notes">Notes</label>
                        <textarea rows="12" cols="25"></textarea>
                      <button type="submit">Submit</button>
                  </form>
              </section>
            </div>
        );
    }
}

export default FinishBook;