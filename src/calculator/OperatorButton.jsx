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
        if(e.key === this.props.children){
            this.props.add_digit(this.props.children)
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