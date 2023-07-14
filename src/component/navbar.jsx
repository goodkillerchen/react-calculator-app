import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state = {}
    renderCal = ()=>{
        if(localStorage.isLogin){
            return  (<li className="nav-item">
            <Link className="nav-link" to="/calculator">Calculator</Link>
            </li>)
        }
        else{
            return ""
        }
    }

    renderLogin = ()=>{
        if(localStorage.isLogin){
            return (<ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link className="nav-link" to="./">{localStorage.id}</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/" onClick={()=>this.props.handleQuitClick(false, '')}>Quit</Link>
            </li>
        </ul>)
        }
        else{
            return (<ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link" to="/signIn">Sign in</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/signUp">Sign up</Link>
            </li>
        </ul>)
        }   
    }
    render() {
        return (
            <>
                <nav className ="navbar navbar-expand-lg bg-body-tertiary">
                    <div className ="container-fluid">
                        <Link className="navbar-brand" to="/">Web</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                               {this.renderCal()}
                            </ul>
                            <span className="navbar-text">
                                {this.renderLogin()}
                            </span>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}

export default Navbar;