import React, { Component } from 'react';
import { connect } from 'react-redux';
import ACTIONS from '../redux/action';


class DigitButton extends Component {
   
    constructor(props){
        super(props);
        this.digiButton = React.createRef()
        this.handleKeyPress = this.handleKeyPress.bind(this);
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
        document.removeEventListener("keydown", this.handleKeyPress, false);
    }

    render() { 

        const handleEvent = ()=>{
            this.props.add_digit(this.props.children)
        }

        
        if(this.props.type === 'zero'){
            return(
                <>
                    <button ref={this.digiButton} 
                        className='digit zero' 
                        onClick={handleEvent} 
                    >
                            {this.props.children}
                    </button>
                </>
            );
        }
        else{
            return (
                <>
                    <button ref={this.digiButton} 
                        className='digit'
                        onClick={handleEvent}  
                    >
                            {this.props.children} 
                    </button>
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