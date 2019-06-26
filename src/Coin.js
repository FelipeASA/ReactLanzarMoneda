import React, { Component } from 'react';
import './Coin.css';

class Coin extends Component{
    render(){
        return(
            <div className={'moNeda'}>
                <img src={this.props.data.imgSrc} alt={this.props.data.side}/>
            </div>

        )
    }

}
export default Coin;