import React from 'react';
import { NavLink, withRouter, Link } from 'react-router-dom';
import tinylogo from '../../images/tinylogo.png';
import TokenService from '../Services/token-service';
import './Nav.css';


function logout(){
    TokenService.clearAuthToken()
}

function Nav(){
    return (
        <div className="nav">
            <NavLink to={`/user`}>
                <img className="tinylogo" src={tinylogo} alt="logo"></img>
            </NavLink>
            <Link to="/" onClick={logout} className="logout">Logout</Link>
        </div>
    )
}

export default withRouter(Nav);