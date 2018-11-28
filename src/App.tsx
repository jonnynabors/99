import React, { Component } from 'react';
import Hand from './components/PlayerHand';
import { Card } from './definitions/Card';
import Deck from './service/Deck';
import PlayerHand from './components/PlayerHand';

const deck = new Deck();
export interface State {
  deck: Card[]
}
class App extends Component<{}, State> {
  constructor(props: any) {
    super(props)
    this.state = {
        deck: deck
    }
}
  render() {
    return (
      <div className="App">
        <PlayerHand currentCards={this.state.deck}/>
      </div>
    );
  }
}

export default App;
