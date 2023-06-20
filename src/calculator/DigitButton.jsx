import React, { Component } from 'react';
import { connect } from 'react-redux';
import ACTIONS from '../redux/action';

class DigitButton extends Component {
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
            this.props.add_digit(this.props.children)
        }

        
        if(this.props.type === 'zero'){
            return(
                <>
                    <button className='zero' onClick={handleEvent}>{this.props.children}</button>
                </>
            );
        }
        else{
            return (
                <>
                    <button className='digit' onClick={handleEvent}>{this.props.children}</button>
                </>
            );
        }
    }
}

const mapDispatchToProps = {
    add_digit: (digit)=>{
        return {
            type: ACTIONS.ADD_DIGIT,
            digit: digit
        }
    }
}
 
export default connect(null, mapDispatchToProps)(DigitButton);