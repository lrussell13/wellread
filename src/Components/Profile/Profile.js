import React from 'react';
import next from '../../images/next.png';
import './Profile.css'
import Nav from '../Nav/Nav';
import ProgressBar from '../ProgressBar/ProgressBar';
import UserBookServices from '../Services/user-books-services';
import lvlService from '../Services/user-lvl-service';
import { Link, withRouter } from 'react-router-dom';

class Profile extends React.Component {
    chooseImage(book){
        if(book.cover_i){
            return <img key={book.id} className="profile-book" src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} alt={book.title}></img>
        }

        if(book.oclc){
            return <img key={book.id} className="profile-book" src={`https://covers.openlibrary.org/b/oclc/${book.oclc}-M.jpg`} alt={book.title}></img>
        }

        if(book.isbn){
            return <img key={book.id}  className="profile-book" src={`https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`} alt={book.title}></img>
        }

        return "";
    }

    state = {
        toRead: [],
        history: [],
        current: [],
        lvl: [{lvl: 0}],
        lvlGoals: [1, 3, 5, 10, 15, 25, 50, 75, 100]
    }
    
    getBooks = () => {
        UserBookServices.getUsersBooks()
        .then(res => res.json())
        .then(books => {
            let toRead = books.filter(book => book.book_status === 1);
            let current = books.filter(book => book.book_status === 2);
            let history = books.filter(book => book.book_status === 3);
    
            this.setState({toRead, history, current});
        })
    }

    getUserLvl = () => {
        lvlService.getUserLvl()
        .then(res => res.json())
        .then(lvl => {
            if(this.state.lvlGoals[lvl[0].lvl] === this.state.history.length){
                const newLvl = { lvl: lvl[0].lvl + 1}  
            
                lvlService.updateUserLvl(lvl[0].id, newLvl)
                .then(() => this.props.history.push('/user'))
            } else {
                this.setState({lvl})
            }
        })
    }

    componentDidMount(){
        this.getBooks();
        this.getUserLvl();
    }

    render(){
        return (
            <>
            <Nav />
            <h1>My Profile</h1>
            <section>
                <h2>Level: {this.state.lvl[0].lvl}</h2>
                <ProgressBar goal={this.state.lvlGoals[this.state.lvl[0].lvl]} progress={this.state.history.length} lvl={this.state.lvl}/>
                <h3>Progress: {this.state.history.length}/{this.state.lvlGoals[this.state.lvl[0].lvl]}</h3>
            </section>
            <section>
                <h2 className="profile-title">To Read</h2>
                <div className="book-holder">
                    {this.state.toRead.filter((book, i) => i < 3).map(book => this.chooseImage(book))}
                    <Link to={`/user/toread`}><img className="next" src={next} alt="more"></img></Link>
                </div>
            </section>
            <section>
                <h2 className="profile-title">History</h2>
                <div className="book-holder">
                    {this.state.history.filter((book, i) => i < 3).map(book => this.chooseImage(book))}
                    <Link to={`/user/history`}><img className="next" src={next} alt="more"></img></Link>
                </div>
            </section>
            <section>
                <h2 className="profile-title">Currently Reading</h2>
                <div className="book-holder">
                    {this.state.current.filter((book, i) => i < 3).map(book => this.chooseImage(book))}
                    <Link to={`/user/current`}><img className="next" src={next} alt="more"></img></Link>
                </div>
            </section>
            <div className="button-holder">
                <Link to="/search"><div className="add">Add Book</div></Link>
            </div>  
            </>
        )
    }

}

export default withRouter(Profile);