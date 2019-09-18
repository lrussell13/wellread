import React from 'react';
import './Register.css';

function Register() {
  return (
      <div className="register-page">
        <section className="register">
            <form className="register-form">
                <label htmlFor="username">Username</label>
                <input id="username" />
                <label htmlFor="password">Password</label>
                <input id="password" type="password"/>
                <label htmlFor="repeat-password">Repeat Password</label>
                <input id="repeat-password" type="password"/>
                <button>register</button>
            </form>
        </section>
      </div>
  );
}

export default Register;