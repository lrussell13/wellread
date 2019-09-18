import React from 'react';
import './Login.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

function Login() {
  return (
      <div className="landing-page">
        <header>
            <div className="hero">
                <img className="logo" src={logo} alt="logo"></img>
            </div>
        </header>
        <section className="login">
            <form className="login-form">
                <label htmlFor="username">Username</label>
                <input id="username" />
                <label htmlFor="password">Password</label>
                <input id="password" type="password"/>
                <Link to="/user/1">
                <div className="login-button">Login</div>
                </Link>
                <button>Register</button>
                <button>Demo</button>
            </form>
        </section>
      </div>
  );
}

export default Login;