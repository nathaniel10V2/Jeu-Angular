import { Injectable } from '@angular/core';
import { GameBaseService } from 'jeu-base';
import { CardGamer } from '../models/card-gamer';

@Injectable({
  providedIn: 'root'
})
export class JeuCartesService extends GameBaseService{

    constructor() {
      super();
    }
    public newGamer(gamerName: string): void {
		const gamer = new CardGamer(gamerName);
		this.addGamer(gamer);
	}
	
	public startGame(): void {
    	if (this.gamerList.length > 1) {
	
		}		
	}	
}
