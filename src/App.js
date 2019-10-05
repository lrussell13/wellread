import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/Utils/PrivateRoute';
import PublicOnlyRoute from './Components/Utils/PublicOnlyRoute';
import Profile from './Components/Profile/Profile';
import History from './Components/History/History';
import FinishBook from './Components/FinishBook/FinishBook';
import ToRead from './Components/ToRead/ToRead';
import BookSearch from './Components/BookSearch/BookSearch';
import Register from './Components/Register/Register';
import Current from './Components/Current/Current';
import ErrrorBoundary from './Components/ErrorBoundary/ErrorBoundary';

class App extends React.Component {
  

  render(){
    return (
      <main className='App'>
        <ErrrorBoundary>
          <Switch >
            <Route path="/" exact render={() => <Login />}/>
            <PrivateRoute path={"/user/"} exact component={() => <Profile /> }/>
            <PrivateRoute path={"/user/history"} component={() => < History />}/>
            <PrivateRoute path={"/user/toread"} component={() => < ToRead />} />
            <PrivateRoute path={"/user/current"} component={() => < Current />} />
            <PrivateRoute path={"/search"} component={BookSearch}/>
            <PrivateRoute path={"/finish/:id"} component={(props) => < FinishBook id={props.match.params.id}/> }/>
            <PublicOnlyRoute path={"/register"} component={Register}/>
          </Switch>
        </ErrrorBoundary>
      </main>
    );
  }
}

export default withRouter(App);