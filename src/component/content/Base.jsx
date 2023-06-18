import React, { Component } from 'react';



class Base extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <div class='card' style={{marginTop: "20px"}}>
                    <div className='card-body'>
                        {this.props.children}
                    </div>
                </div>
            </>
        );
    }
}
 
export default Base;