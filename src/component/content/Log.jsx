import React, { Component } from 'react';
import Base from './Base';
import '../css/Log.css'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import showAlert from '../../utils/alert.js'

class Log extends Component {
    state = {
        msg: '',
        username: '',
        password: ''
    }

    handleSignUpClick = ()=>{
        window.location.href = '/Signup'
    }

    handleSignInClick = async e=>{
        e.preventDefault()
        const alert = document.querySelector('.alert')
        if(this.state.username.length < 8){
            this.setState({msg: "Invalid Username!!"})
            showAlert(alert, false)
            
        }
        else if(this.state.password.length < 6){
            this.setState({msg: "Invalid Password!!"})
            showAlert(alert, false)
        }
        else{
            try{
                const req = await axios({url: 'http://hmajax.itheima.net/api/login', 
                method: 'POST',
                data:{
                    username: this.state.username,
                    password: this.state.password
                }})
                this.setState({msg: "Log in successfully"})
                console.log(req)
                showAlert(alert, true)
                localStorage.setItem('id', this.state.username)
                localStorage.setItem('isLogin', true)
                setTimeout(()=>{
                    window.location.href = '/'
                }, 1800)
                
            }
            catch(err){
                this.setState({msg: "Username or Password incorrect!!"})
                showAlert(alert, false)
            }
        }
    }
    render() {
        return (
            <>
                <Base>
                    <div className="background">
                        <div className="container">
                            <h3>Sign in</h3>
                            <div className="alert alert-success" role="alert">
                                {this.state.msg}
                            </div>
                            <div className="form_wrap">
                                <form className="login-form">
                                    <div className="mb-3">
                                        <label htmlFor="username" className="form-label">Username</label>
                                        <input type="text" className="form-control username" name="username" onChange={e => {this.setState({username: e.target.value})}} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" className="form-control password" name="password" onChange={e => {this.setState({password: e.target.value})}} />
                                    </div>
                                    <button type="button" className="btn btn-primary btn-login" onClick={this.handleSignInClick}> Sign in </button>
                                    <span>&nbsp; or &nbsp;</span>
                                    <button type="button" className="btn btn-secondary btn-login" onClick={this.handleSignUpClick}> Sign up </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </Base>
            </>
        );
    }
}

export default Log;