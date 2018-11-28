import React, { Component } from 'react';
import Deck from '../service/Deck';

class Hand extends Component {

    componentDidMount() {
        const deck = new Deck();
        console.log(deck.createDeck());
        console.log(deck.drawTop());
        console.log(deck.drawHand())
    }

    render() {
        return (
            <div>
                {}
            </div>
        );
    }
}

export default Hand;