import React from 'react';
import AuthApiService from '../Services/auth-api-service';
import userLvlService from '../Services/user-lvl-service';
import { withRouter } from 'react-router-dom';
import './Register.css';

class Register extends React.Component {
    static defaultProps = {
        onRegistrationSuccess: () => {}
    }
    
    state = { error: null }
    
    handleSubmit = ev => {
        ev.preventDefault();
        const { user_name, password } = ev.target;
    
        this.setState({ error: null })
          AuthApiService.postUser({
            user_name: user_name.value,
            password: password.value,
        })
        .then(user => {
            const newUserLvl = {
                user_id: user.id
            }

            userLvlService.insertUserLvl(newUserLvl)

            user_name.value = '';
            password.value = '';
            this.props.history.push('/');
        })
        .catch(res => {
            this.setState({ error: res.error });
        })
    }

    render(){
    const { error } = this.state;
    return (
        <div className="register-page">
            <section className="register">
                <form className="register-form" onSubmit={this.handleSubmit}>
                    <label htmlFor="user_name">Username</label>
                    <input id="user_name"/>
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password"/>
                    <label htmlFor="repeat-password">Repeat Password</label>
                    <input id="repeat-password" type="password"/>
                    {error && <p className='red error'>{error}</p>}
                    <button type="submit">Register</button>
                </form>
            </section>
        </div>
    );
    }
}

export default withRouter(Register);