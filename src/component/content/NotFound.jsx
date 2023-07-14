import React, { Component } from 'react';
import background from '../../resource/404.png'

class NotFound extends Component {
    state = {  } 
    render() { 
        return (   
                <div style={{backgroundImage: `url(${background})`,  backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100vw',
                height: '100vh'}}>
                </div>
        );
    }
}
 
export default NotFound;