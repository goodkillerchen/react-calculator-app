import React, { Component } from 'react';
import Base from './Base';
import serialize from '../../utils/form-serialize'
import showAlert from '../../utils/alert';
import axios from 'axios';


class Register extends Component {
    state = { 
        msg: ''
     } 

    handleSignUpClick = async ()=>{
        const form = document.querySelector('.login-form')
        const {username, password, confirm} = serialize(form, {hash:true, empty: true})
        const alert = document.querySelector('.alert')
        if(username.length < 8){
            showAlert(alert, false)
            this.setState({msg: "The length of username should be greater or equal to 8!"})
        }
        else if(password.length < 6){
            showAlert(alert, false)
            this.setState({msg: "The length of password should ber greater or equal to 6!"})
        }
        else if(password !== confirm){
            showAlert(document.querySelector('.alert'), false)
            this.setState({msg: "Passwords do not match"})
        }
        else{
            try{
                const req = await axios({
                    url: 'http://hmajax.itheima.net/api/register',
                    method: 'POST',
                    data: {
                        username, password
                    }
                })
                console.log(req)
                showAlert(alert, true)
                this.setState({msg: "Login successfully!!"})
                setTimeout(()=>{
                    window.location.href = '/SignIn'
                }, 1500)
                
            }catch(err){
                console.log(err)
                showAlert(alert, false)
                this.setState({msg: "Account is occupied!!"})
            }
        }
    }
    
    render() { 
        
       
        
        return (
            <>
                <Base>
                <div className="background">
                        <div className="container">
                            <h3>Sign up</h3>
                            <div className="alert alert-success" role="alert">
                                {this.state.msg}
                            </div>
                            <div className="form_wrap">
                                <form className="login-form">
                                    <div className="mb-3">
                                        <label htmlFor="username" className="form-label">Username</label>
                                        <input type="text" className="form-control username" name="username" onChange={e => {this.setState({username: e.target.value})}} />
                                        <span style={{fontSize: '1px', color: 'red'}}>Length should be greater or equal to 8!</span>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" className="form-control password" name="password" onChange={e => {this.setState({password: e.target.value})}} />
                                        <span style={{fontSize: '1px', color: 'red'}}>Length should be greater or equal to 6!</span>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Confirm Password</label>
                                        <input type="password" className="form-control confirm" name="confirm" onChange={e => {this.setState({password: e.target.value})}} />
                                    </div>
                                    <button type="button" className="btn btn-primary btn-login" onClick={this.handleSignUpClick}> Sign up </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    </Base>
            </>
        );
    }
}
 
export default Register;