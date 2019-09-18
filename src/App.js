import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Login from './Components/Login/Login';
import Profile from './Components/Profile/Profile';
import History from './Components/History/History';
import FinishBook from './Components/FinishBook/FinishBook';
import ToRead from './Components/ToRead/ToRead';
import BookSearch from './Components/BookSearch/BookSearch';
import Register from './Components/Register/Register';

function App() {
  return (
    <main className='App'>
      <Switch >
        <Route path="/" exact render={() => <Login />}/>
        <Route path="/user/:id" exact render={() => <Profile />}/>
        <Route path="/user/:id/history" render={() => <History />}/>
        <Route path="/user/:id/toread" render={() => <ToRead />}/>
        <Route path="/search" render={() => <BookSearch />}/>
        <Route path="/finish" render={() => <FinishBook />}/>
        <Route path="/register" render={() => <Register />}/>
      </Switch>
    </main>
  );
}

export default withRouter(App);