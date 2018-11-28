import React, { Component } from 'react';
import { Card } from '../definitions/Card';

export interface Props {
    currentCards: Card[]
}
class PlayerHand extends Component<Props, {}> {

    constructor(props: any) {
        super(props)
    }
    componentDidMount() {
    }

    showHand() {
        return this.props.currentCards.map((card: Card) => {
            return (
                <div>
                    {card.value} of {card.suit}
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                Your Hand:
                {this.showHand()}
            </div>
        );
    }
}

export default PlayerHand;