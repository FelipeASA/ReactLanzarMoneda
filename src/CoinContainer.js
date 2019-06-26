import React, { Component } from 'react';
import { choice } from './Helpers';
import Coin from "./Coin";

class CoinContainer extends Component {
    static defaultProps ={
        coins:[
            {side: 'heads', imgSrc: "https://tinyurl.com/react-coin-heads-jpg"},
            {side: 'tails', imgSrc: "http://www.pcgscoinfacts.com/UserImages/71009269r.jpg"}
        ]
    };
    constructor(props){
        super(props);
        this.state = {
            currCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0,
        };
        this.handleClick = this.handleClick.bind(this);
    }
    flipCoin(){
       const newCoin = choice(this.props.coins);
       this.setState(st => {

         return{
             currCoin: newCoin,
             nFlips: st.nFlips + 1,
             nHeads: st.nHeads + (newCoin.side === "heads" ? 1 : 0),
             nTails: st.nTails + (newCoin.side === "tails" ? 1 : 0),
         };
       });
    }
    handleClick(e){
        this.flipCoin();
    }
    render(){
        return(
            <div className={"CoinContainer"}>
                <h2>Tiremos la moneda!!</h2>

                {this.state.currCoin && <Coin data={this.state.currCoin}/>}
                <button onClick={this.handleClick}>Lanza!</button>
                <p>De {this.state.nFlips} tiros, han habido {this.state.nHeads}{" "}
                caras y {this.state.nTails} sellos
                </p>
            </div>
        )
    }
}
export default CoinContainer;