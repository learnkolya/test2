import React, { Component } from 'react';
import users from '../json/users.json';
import Register from './Register';
import ForgotPass from './ForgotPass';


export default class NotAuth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: null,
            password: null,
            modal: false,
            modal_pass: false
        };
    }



    handleAuth = () => {
       if(!localStorage.getItem('auth')) 
        {
            console.error('error');
            document.querySelector('.form_error').innerHTML = 'Login or Password not valieble';
            return;
        };
        if(!this.state.login || !this.state.password) 
        {
            console.error('error');
            document.querySelector('.form_error').innerHTML = 'Login or Password not writed';
        };


        this.props.logState(localStorage.getItem('auth'))
       
    }

    equal = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            users.users.map(user => {
               user.login === this.state.login && user.password === parseInt(this.state.password) &&  localStorage.setItem('auth', user.login);
               });
        });
    }

    handleModal = (e = true) => {
        this.setState({modal: e, modal_pass: false})
    }

    handleModalPass = (e = true) => {
        this.setState({modal_pass: e, modal: false})
    }



    render() {
        return(
            <div>
                {this.state.modal && <Register modal={this.handleModal}/>}
                {this.state.modal_pass && <ForgotPass modalPass={this.handleModalPass}/>}
                
                <div className="right-form-block">
                    <div className="reg_text">You do not have an account? <button className="btn_normal_blue" onClick={this.handleModal}>Sign up</button></div>
                    <div className="title-form">Sign in to exodus</div>
                   
                    <div className="w_block">
                        <input type="text" name="login" onChange={this.equal} placeholder="Enter login"/>
                        <input type="text" name="password" onChange={this.equal} placeholder="Enter password"/>
                        <div className="form_error">
                        </div>
                        <div className="bottom_form_panel">
                            <button className="btn_in"  onClick= {this.handleAuth}>Sign in</button>
                            <div className="forgot_p" onClick={this.handleModalPass}>Forgot your password?</div>
                        </div>
                    </div>
                </div>

                <div className="left">
                    <div className="phone"></div>
                </div>
            </div>
        );
    }
}