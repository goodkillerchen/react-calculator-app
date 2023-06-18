import React, { Component } from 'react';
import Base from './Base';
import { connect } from 'react-redux';

class Calculator extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <Base>
                    <div className='calculator'>
                        <div className='output'>
                            <div className='last-output'>{this.props.lastState} {this.props.operator}</div>
                            <div className='current-output'>{this.props.currentState}</div>
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

const mapStateToProps = (state, props)=>{
    return {
        currentState:  state.currentState,
        lastState: state.lastState,
        operator: state.operator
    }
}
 
export default connect(mapStateToProps)(Calculator);