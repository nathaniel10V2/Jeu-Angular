import { Injectable } from '@angular/core';
import { GameBaseService } from 'jeu-base';
import { MemoryGamer } from '../models/memory-gamer';

@Injectable({
  providedIn: 'root'
})
export class JeuMemoireService extends GameBaseService{
	
	fruits: Array<string> = new Array<string>();
	
    constructor() {
      super();
    }

    public newGamer(gamerName: string): void {
		const gamer = new MemoryGamer(gamerName);
		this.addGamer(gamer);
	}
	
	public startGame(): void {
    	if (this.gamerList.length > 1) {
            this.setFruitsNumber();
			this.shuffleFruits();
        }		
	}
	
	private setFruitsNumber(): void {
        if (this.getGamerCount() <= 2) {
            this.fruits = ["pomme","cerise","poire","banane","orange",
            "pomme","cerise","poire","banane","orange"]; 
        }
        else {
            this.fruits = ["pomme","cerise","poire","banane","orange","pomme","cerise","poire",
			"banane","orange","fraise","ananas","melon","fraise","ananas","melon"];
		}		
	}
	
	private  shuffleFruits(): void {
		if (this.fruits) {        
			for (let i = 0; i < this.fruits.length; i++) {
	            const item = this.fruits[i];
	            const message = i + "-" + item;
	            console.log(message);
	        }
	    	const fruitsMélangés = this.fruits.sort((a,b) => 0.5 - Math.random());
			this.fruits = fruitsMélangés;
	        console.log(" ");
	
			for (let i = 0; i < this.fruits.length; i++) {
	            const item = this.fruits[i];
	            const message = i + "-" + item;
	            console.log(message);
	        }	
		}
	}
	
	public getFruitsList(): Array<string> {
		return this.fruits;	
	}
	
	public checkNumber(numeroSaisi: any): string|null {
        if ((numeroSaisi >= 0) && (numeroSaisi < this.fruits.length)) {
            return null;
        }
        else {
        	const message = "Le numéro saisi doit être compris entre 0 et " + (this.fruits.length - 1);
            return message;
        }
	}
	/**
	 * La méthode gamerPlay gère le tour de jeu du joueur actif. Elle vérifie si les numéros sélectionnés correspondent à deux fruits identiques. Si c'est le cas, le joueur gagne un point, les fruits sont retirés de la liste, et celle-ci est mélangée. 
	 * Si les numéros sont identiques, un message d'erreur est retourné. Elle vérifie également si le jeu est terminé.
	 * @param premierNumero 
	 * @param deuxiemeNumero 
	 * @returns 
	 */
	public gamerPlay(premierNumero: any, deuxiemeNumero: any): string|null {
		if (this.fruits.length > 0){
			if (premierNumero == deuxiemeNumero){
				const message = "Les deux numéros saisi doivent être différents";
				return message;
			} else {
				if (this.fruits[premierNumero] == this.fruits[deuxiemeNumero]){
					if (this.activeGamer){
						this.activeGamer.score++;
						this.fruits = this.fruits.filter((item) => item !== this.fruits[premierNumero]);
						console.log(" ");
						console.log(this.activeGamer.name + " = " + this.activeGamer.score);
						console.log(" ");
						this.shuffleFruits();					
					}
				}				
			};
		}
		this.gameEnd();
		return null;
	}
	
	public gameEnd(): string|undefined|null {
		if (this.fruits.length == 0){
			this.gamerList = this.gamerList.sort((a,b)=> a.score - b.score);
			this.gamerList.reverse();
			const winnerGamer = this.gamerList[0];
			return "Le gagnant est " + winnerGamer.name + " avec un score de " + winnerGamer.score;			
		}
		return null;
	}
}
