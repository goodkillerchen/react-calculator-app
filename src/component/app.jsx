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
    state = {  } 
    render() { 
        return (
            <>
                <Navbar></Navbar>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path='/calculator' element={<Calculator></Calculator>}></Route>
                    <Route path='/signIn' element={<Log></Log>}></Route>
                    <Route path='/signUp' element={<Register></Register>}></Route>
                    <Route path='/404' element={<NotFound></NotFound>}></Route>
                    <Route path='*' element={ <Navigate replace to='/404'></Navigate>}></Route>
                </Routes>
            </>
        );
    }
}
 
export default App;