import React from 'react';
import demo from '../../images/demo.jpg';
import next from '../../images/next.png';
import './Profile.css'
import Nav from '../Nav/Nav';
import ProgressBar from '../ProgressBar/ProgressBar';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
    state = {
        toRead: [{title: "Harry Potter 1", img: {demo}}, {title: "Harry Potter 2", img: {demo}}, {title: "Harry Potter 3", img: {demo}}],
        history: [{title: "Harry Potter 1", img: {demo}}, {title: "Harry Potter 2", img: {demo}}, {title: "Harry Potter 3", img: {demo}}],
        achievements: [{title: '1'}, {title: '3'}, {title: '4'}],
        goal: 50,
        progress: 37
    }

    render(){
        return (
            <>
            <Nav />
            <h1>My Profile</h1>
            <section>
                <h3>Goal: {this.state.goal}</h3>
                <ProgressBar goal={this.state.goal} progress={this.state.progress}/>
                <h3>Progress: {this.state.progress}</h3>
            </section>
            <section>
                <h2 className="profile-title">To Read</h2>
                <div className="book-holder">
                    {this.state.toRead.map(book => <img className="profile-book" key={book.title} src={demo} alt={book.title}></img>)}
                    <Link to="/user/1/toread"><img className="next" src={next} alt="more"></img></Link>
                </div>
            </section>
            <section>
                <h2 className="profile-title">History</h2>
                <div className="book-holder">
                    {this.state.history.map(book => <img className="profile-book" key={book.title} src={demo} alt={book.title}></img>)}
                    <Link to="/user/1/history"><img className="next" src={next} alt="more"></img></Link>
                </div>
            </section>
            <section>
                <h2 className="profile-title">Achievements</h2>
                <div className="achievement-holder">
                    {this.state.history.map(achievement => <div className="achievement" key={achievement.title}></div>)}
                </div>
            </section>
            <div className="button-holder">
                <Link to="/search"><div className="add">Add Book</div></Link>
            </div>  
            </>
        )
    }

}

export default Profile;