import React from 'react';
import { NavLink } from 'react-router-dom';
import tinylogo from '../../images/tinylogo.png';
import './Nav.css';

function Nav(){
    return (
        <div className="nav">
            <NavLink to="/user/1">
                <img className="tinylogo" src={tinylogo} alt="logo"></img>
            </NavLink>
        </div>
    )
}

export default Nav;