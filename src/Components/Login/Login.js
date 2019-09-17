import React from 'react';
import './Login.css';
import logo from '../../images/logo.png';

function Login() {
  return (
      <div className="landing-page">
        <header>
            <div className="hero">
                <img className="logo" src={logo} alt="logo"></img>
            </div>
        </header>
        <section className="login">
            <form>
                <label for="username">Username</label>
                <input id="username" />
                <label for="password">Password</label>
                <input id="password" />
                <button type="submit">Login</button>
                <button>Register</button>
                <button>Demo</button>
            </form>
        </section>
      </div>
  );
}

export default Login;