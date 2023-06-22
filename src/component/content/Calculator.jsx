import React, { Component } from 'react';
import Base from './Base';
import { connect } from 'react-redux';
import DigitButton from '../../calculator/DigitButton';
import OperatorButton from '../../calculator/OperatorButton';
import ACTIONS from '../../redux/action';

class Calculator extends Component {
    state = {  } 
    constructor(props){
        super(props);
        this.handleKeyPress = this.handleKeyPress.bind(this)
        
    }
    handleKeyPress = (e)=>{
        if(e.key === 'c'){
            this.props.clear()
        }
        else if(e.key === 'Backspace'){
            this.props.delete()
        }
    }
    componentDidMount(){
        document.addEventListener("keydown", this.handleKeyPress, false);
    }
    componentWillUnmount(){
        document.removeEventListener("keydown", this.handleKeyPress, false);
    }

    render() { 
        return (
            <>
                <Base>
                    <div className='calculator'>
                        <div className='output'>
                            <div className='last-output'>{this.props.lastState} {this.props.operator}</div>
                            <div className='current-output'>{this.props.currentState}</div>
                        </div>
                        <button className='firstline' onClick={this.props.clear}>AC</button>
                        <button className='firstline' onClick={this.props.opposite}>+/-</button>
                        <button className='firstline' onClick={this.props.delete}>DEL</button>
                        <OperatorButton>÷</OperatorButton>
                        <DigitButton>7</DigitButton>
                        <DigitButton>8</DigitButton>
                        <DigitButton>9</DigitButton>
                        <OperatorButton>×</OperatorButton>
                        <DigitButton>4</DigitButton>
                        <DigitButton>5</DigitButton>
                        <DigitButton>6</DigitButton>
                        <OperatorButton>-</OperatorButton>
                        <DigitButton>1</DigitButton>
                        <DigitButton>2</DigitButton>
                        <DigitButton>3</DigitButton>
                        <OperatorButton>+</OperatorButton>
                        <DigitButton type="zero">0</DigitButton>
                        <DigitButton>.</DigitButton>
                        <OperatorButton>=</OperatorButton>
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

const mapDispatchToProps = {
    clear: ()=>{
        return {
            type: ACTIONS.CLEAR
        }
    },
    delete: ()=>{
        return {
            type: ACTIONS.DELETE_DIGIT
        }
    },
    opposite: ()=>{
        return {
            type: ACTIONS.OPPOSITE_OPERATOR
        }
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Calculator);