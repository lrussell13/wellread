import React from 'react';
import TokenService from '../Services/token-service';
import AuthApiService from '../Services/auth-api-service';
import config from '../../config';
import { withRouter, Link } from 'react-router-dom';
import './Login.css';
import logo from '../../images/logo.png';

class Login extends React.Component {
    static defaultProps = {
        onLoginSuccess: () => {}
    }
    
    state = { error: null }
    
    handleSubmitJwtAuth = ev => {
        ev.preventDefault()
        this.setState({ error: null })
        const { user_name, password } = ev.target
          AuthApiService.postLogin({
          user_name: user_name.value,
          password: password.value,
        })
        .then(res => {
            user_name.value = ''
            password.value = ''
            TokenService.saveAuthToken(res.authToken)
            this.props.history.push(`/user`);
        })
        .catch(res => {
            this.setState({ error: res.error })
        })
    }

    handleDemo(){
        TokenService.saveAuthToken(config.DEMO_TOKEN)
        this.props.history.push(`/user`)
    }
      

    render(){
    const { error } = this.state;
    return (
        <div className="landing-page">
            <header>
                <div className="hero">
                    <img className="logo" src={logo} alt="logo"></img>
                </div>
            </header>
            <section className="login">
                <form className="login-form" onSubmit={this.handleSubmitJwtAuth}>
                    <div role='alert'>
                    {error && <p className='red'>{error}</p>}
                    </div>
                    <label htmlFor="user_name">Username</label>
                    <input id="user_name" />
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password"/>
                    <button type="submit" className="login-button">Login</button>
                    <Link to="/register"><div className="register-button">Register</div></Link>
                    <button onClick={() => this.handleDemo()} className="button">Demo</button>
                </form>
            </section>
        </div>
    );
    }
}

export default withRouter(Login);