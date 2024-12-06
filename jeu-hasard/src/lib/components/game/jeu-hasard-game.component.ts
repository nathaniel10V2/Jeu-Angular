import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Gamer } from 'jeu-base';
import { JeuHasardService } from '../../services/jeu-hasard.service';

@Component({
    selector: 'lib-jeu-hasard',
    templateUrl: `./jeu-hasard-game.component.html`,
    styleUrl: `./jeu-hasard-game.component.scss`,
    standalone: false
})
export class JeuHasardGameComponent {

	title: string = "Jeu Hasard";
	
	imageURL ='/assets/fond blanc.png';
	
	activeGamer: Gamer|undefined|null;
	
	gamerList: Array<Gamer>|undefined;
	
	diceValue: number = 0;
	
	messageFinal: string|undefined|null;
	
	constructor(private jeuHasardService: JeuHasardService, 
				private router: Router) {
	}
	
	ngOnInit(){
		if (this.jeuHasardService){
			this.activeGamer = this.jeuHasardService.getActiveGamer();
			this.gamerList = this.jeuHasardService.getGamerList();	
		}
	}
	
	gameTerminated(): boolean {
		return (this.messageFinal != null);
	}
	
	isPlay(): boolean {
		if (this.diceValue > 0){
			return true;			
		}
		return false;			
	}

	retour(): void {
		this.resetFields();
		this.resetGamers();
		this.activeGamer = null;
		this.diceValue = 0;		
		this.router.navigateByUrl("/jeu-hasard/gamer");
	}
	
	gameTurn(){
		if (this.jeuHasardService){
			this.diceValue = this.jeuHasardService.diceRoll();
			switch (this.diceValue){
				case 1:
				this.imageURL ='/assets/Dé Face 1.png';
				break;
				case 2:
				this.imageURL ='/assets/Dé Face 2.png';
				break;
				case 3:
				this.imageURL ='/assets/Dé Face 3.png';
				break;
				case 4:
				this.imageURL ='/assets/Dé Face 4.png';
				break;
				case 5:
				this.imageURL ='/assets/Dé Face 5.png';
				break;
				case 6:
				this.imageURL ='/assets/Dé Face 6.png';				
			}
			if(this.activeGamer){
				this.jeuHasardService.increaseGamerScore(this.activeGamer,this.diceValue);
				const messageFinal = this.jeuHasardService.gameEnd();
				if (messageFinal != null) {
					this.messageFinal = messageFinal;
				}							
			}
		}		
	}
	
	nextGamer()	{
		if (this.jeuHasardService){
			if (this.isPlay()){
				this.activeGamer = this.jeuHasardService.nextGamer();
				this.diceValue = 0;
				this.imageURL = '/assets/fond blanc.png';				
			}
		}
	}
	
	replay(): void {
		this.resetFields();
		this.resetGamers();
		this.activeGamer = this.jeuHasardService.getActiveGamer();
		this.diceValue = 0;		
	}
	
	resetFields(): void {
		this.messageFinal = null;
		this.imageURL = '/assets/fond blanc.png';
	}
	
	resetGamers(): void {
		if (this.jeuHasardService){	
			this.jeuHasardService.resetActiveGamer();
			this.jeuHasardService.resetGamerScore();
			this.jeuHasardService.winnerGamer = null;
		}
	}				
}
