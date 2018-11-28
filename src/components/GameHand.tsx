import React, { Component } from 'react';
import { Card } from '../definitions/Card';

export interface Props {
    topCard: Card
}
class GameHand extends Component<Props, {}> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div>
                Deck Cards:
                {this.props.topCard.suit}
            </div>
        );
    }
}

export default GameHand;