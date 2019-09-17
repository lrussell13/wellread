import React from 'react';
import tinylogo from '../../images/tinylogo.png';
import './Nav.css';

function Nav(){
    return (
        <div className="nav">
            <img className="tinylogo" src={tinylogo} alt="logo"></img>
        </div>
    )
}

export default Nav;