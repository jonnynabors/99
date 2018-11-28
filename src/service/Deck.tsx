import { Card } from "../definitions/Card";
import * as _ from 'underscore';

class Deck {
    deck: Card[];

    constructor() {
        this.deck = [];
    
        const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
        const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
    
        for (let suit in suits) {
          for (let value in values) {
            this.deck.push({
              suit: `${suits[suit]}`,
              value: `${values[value]}` 
            });
          }
        }
      }

      createDeck() {
       this.deck = _.shuffle(this.deck);
       return(this.deck);
      }

      drawTop() {
        return this.deck.pop();
      }

      drawHand() {
        return [
          this.drawTop(),
          this.drawTop(),
          this.drawTop()
        ]
      }
}

export default Deck;