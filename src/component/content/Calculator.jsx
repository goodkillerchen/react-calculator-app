import React, { Component } from 'react';
import Base from './Base';

class Calculator extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <Base>

                    <div className='calculator'>
                        <div className='output'>
                            <div className='last-output'>123*</div>
                            <div className='current-output'>4569999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999</div>
                        </div>
                        <button className='firstline'>AC</button>
                        <button className='firstline'>+/-</button>
                        <button className='firstline'>DEL</button>
                        <button className='operator'>÷</button>
                        <button className='digit'>7</button>
                        <button className='digit'>8</button>
                        <button className='digit'>9</button>
                        <button className='operator'>×</button>
                        <button className='digit'>4</button>
                        <button className='digit'>5</button>
                        <button className='digit'>6</button>
                        <button className='operator'>-</button>
                        <button className='digit'>1</button>
                        <button className='digit'>2</button>
                        <button className='digit'>3</button>
                        <button className='operator'>+</button>
                        <button className='zero'>0</button>
                        <button className='digit'>.</button>
                        <button className='operator'>=</button>
                    </div>
                </Base>
            </>
        );
    }
}
 
export default Calculator;