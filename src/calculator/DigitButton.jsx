import React, { Component } from 'react';
import { connect } from 'react-redux';
import ACTIONS from '../redux/action';

class DigitButton extends Component {
    state = {  } 
    render() { 

        const handleEvent = ()=>{
            this.props.add_digit(this.props.children)
        }

        const handleKeyboard = (e)=>{
            console.log(e.keyCode)
        }

        if(this.props.type === 'zero'){
            return(
                <>
                    <button className='zero' onClick={handleEvent} onKeyDown={handleKeyboard}>{this.props.children}</button>
                </>
            );
        }
        else{
            return (
                <>
                    <button className='digit' onClick={handleEvent} onKeyDown = {(e)=>handleKeyboard(e)}>{this.props.children}</button>
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