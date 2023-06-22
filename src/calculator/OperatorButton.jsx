import React, { Component } from 'react';
import ACTIONS from '../redux/action';
import { connect } from 'react-redux';

class OperatorButton extends Component {
    state = {  } 
    constructor(props){
        super(props);
        this.handleKeyPress = this.handleKeyPress.bind(this)
        
    }
    handleKeyPress = (e)=>{
        switch(this.props.children){
            case('+'):
                if(e.shiftKey && e.key === '='){
                    this.props.choose_operator('+')
                }
                break;
            case('-'):
                if(e.key === ''){
                    this.props.choose_operator('-')
                }
                break;
            case('×'):
                if(e.shiftKey && e.key === '*'){
                    this.props.choose_operator('×')
                }
                break;
            case('÷'):
                if(e.key === '/'){
                    this.props.choose_operator('÷')
                }
                break;
            default:
                if(e.key === 'Enter'){
                    this.props.choose_operator('=')
                }
        }
    }
    componentDidMount(){
        document.addEventListener("keydown", this.handleKeyPress, false);
    }
    componentWillUnmount(){
        document.removeEventListener("keydown", this.handleEvent, false);
    }
    render() { 
        const handleEvent = ()=>{
            this.props.choose_operator(this.props.children)
        }

        return (
            <>
                <button className='operator' onClick={handleEvent} >{this.props.children}</button>
            </>
        );
    }
}


const mapDispatchToProps = {
    choose_operator: (operator)=>{
        return {
            type: ACTIONS.CHOOSE_OPERATOR,
            operator: operator
        }
    }
}
 
export default connect(null, mapDispatchToProps)(OperatorButton);