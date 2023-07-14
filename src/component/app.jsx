import React, { Component } from 'react';

import { Routes, Route  } from 'react-router-dom';

import { Navigate } from 'react-router-dom';

import Home from './content/Home';

import Navbar from './navbar';
import Calculator from './content/Calculator';
import Log from './content/Log';
import Register from './content/Register';
import NotFound from './content/NotFound';

class App extends Component {
    state = {
        isLogin: localStorage.getItem('isLogin'),
        userName: localStorage.getItem('id')
     } 
    componentDidMount(){
        console.log(this.state.isLogin)
        console.log(1111)
    }
    handleQuitClick = (state, userName)=>{
        this.setState({isLogin: state, userName})
        localStorage.clear()
    }
    render() { 
        console.log(this.state)
        return (
            <>
                <Navbar handleQuitClick = {this.handleQuitClick}></Navbar>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path='/calculator' element={this.state.isLogin ? <Calculator></Calculator> : <Navigate replace to='/404'></Navigate>}></Route>
                    <Route path='/signIn' element={this.state.isLogin ? <Home></Home> : <Log></Log>}></Route>
                    <Route path='/signUp' element={this.state.isLogin ? <Home></Home> : <Register></Register>}></Route>
                    <Route path='/404' element={<NotFound></NotFound>}></Route>
                    <Route path='*' element={ <Navigate replace to='/404'></Navigate>}></Route>
                </Routes>
            </>
        );
    }
}
 
export default App;