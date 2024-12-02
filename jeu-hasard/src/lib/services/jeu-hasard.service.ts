import { Injectable } from '@angular/core';
import { GameBaseService, Gamer } from 'jeu-base';
import { HasardGamer } from '../models/hasard-gamer';

@Injectable({
  providedIn: 'root'
})
export class JeuHasardService extends GameBaseService{
	
    winnerScore: number = 20;

    winnerGamer: HasardGamer|undefined|null;
	
    constructor() {
      super();
    }

	public newGamer(gamerName: string): void {
		const gamer = new HasardGamer(gamerName);
		this.addGamer(gamer);
	}
	
	public startGame(): void {
    			
	}
	
	public diceRoll(): number {
		let diceValue = Math.floor(Math.random() * 6) + 1;
		return diceValue;
	}
	
	public increaseGamerScore(gamer: HasardGamer, value: number){
		gamer.score = gamer.score + value;
		if (gamer.score >= this.winnerScore){
			this.winnerGamer = this.getActiveGamer();	
		}
	}
	
	public gameEnd(): string|undefined|null {
		if (this.winnerGamer != null){
			return "Le gagnant est " + this.winnerGamer.name + " avec un score de " + this.winnerGamer.score;
		}
		return null;		
	}		
}
