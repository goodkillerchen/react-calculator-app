import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state = {}
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
                                <li className="nav-item">
                                    <Link className="nav-link" to="/calculator">Calculator</Link>
                                </li>
                            </ul>
                            <span className="navbar-text">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/signIn">Sign in</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/signUp">Sign up</Link>
                                    </li>
                                </ul>
                            </span>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}

export default Navbar;