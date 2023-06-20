import React, { Component } from 'react';
import Base from './Base';
import { connect } from 'react-redux';
import DigitButton from '../../calculator/DigitButton';

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
                        <button className='firstline'>÷</button>
                        <DigitButton>7</DigitButton>
                        <DigitButton>8</DigitButton>
                        <DigitButton>9</DigitButton>
                        <button className='operator'>×</button>
                        <DigitButton>4</DigitButton>
                        <DigitButton>5</DigitButton>
                        <DigitButton>6</DigitButton>
                        <button className='operator'>-</button>
                        <DigitButton>1</DigitButton>
                        <DigitButton>2</DigitButton>
                        <DigitButton>3</DigitButton>
                        <button className='operator'>+</button>
                        <DigitButton type="zero">0</DigitButton>
                        <DigitButton>.</DigitButton>
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