import { Card } from "../definitions/Card";
import * as _ from 'underscore';

export default class Deck {
    deck: Card[];
    topCard: Card;

    constructor() {
        this.deck = [];
        this.topCard = {
          suit: '',
          value: ''
        };
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
       return _.shuffle(this.deck) as Card[];
      }

      drawTop(deck: Card[]) {
        // @ts-ignore
        this.topCard = deck.pop();
        return this.topCard;
      }

      drawHand(deck: Card[]) {
        return [
          this.drawTop(deck),
          this.drawTop(deck),
          this.drawTop(deck)
        ]
      }
}