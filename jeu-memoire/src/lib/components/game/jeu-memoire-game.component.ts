import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Gamer } from 'jeu-base';
import { JeuMemoireService } from '../../services/jeu-memoire.service';

@Component({
    selector: 'jeu-memoire-game',
    templateUrl: `./jeu-memoire-game.component.html`,
    styleUrl: `./jeu-memoire-game.component.scss`,
    standalone: false
})
export class JeuMemoireGameComponent implements OnInit {
	
	title: string = "Jeu Memoire";
	
	activeGamer: Gamer|undefined|null;

	previousGamer: Gamer|undefined|null;	
	
	gamerList: Array<Gamer>|undefined;
	
	fruits: Array<string> = new Array<string>();
	
	fruitsInitial: Array<string> = new Array<string>();
	
	premierFruit: string|undefined|null;
	
	deuxiemeFruit: string|undefined|null;
	
	messageFinal: string|undefined|null;
	
	jeuMemoireGameForm: FormGroup;
	
	constructor(private jeuMemoireService: JeuMemoireService, 
				private formBuilder: FormBuilder,
				private router: Router) {
		this.jeuMemoireGameForm = this.formBuilder.group({
			firstNumber: ['', [Validators.required]],
			secondNumber: ['', [Validators.required]],
		});
	}
	
	ngOnInit(){
		if (this.jeuMemoireService){
			this.jeuMemoireService.startGame();
			this.activeGamer = this.jeuMemoireService.getActiveGamer();	
			this.fruits = this.jeuMemoireService.getFruitsList();
			this.fruitsInitial = this.fruits;
			this.gamerList = this.jeuMemoireService.getGamerList();	
		}
	}
	
	getFirstNumber(): any {
		return this.jeuMemoireGameForm.value.firstNumber;
	}
	
	getSecondNumber(): any {
		return this.jeuMemoireGameForm.value.secondNumber;
	}
	
	retour(): void {
		this.resetFields();
		this.resetGamers();
		this.activeGamer = null;		
		this.router.navigateByUrl("/jeu-memoire/gamer");
	}
	
	nextGamer(){
		if (this.jeuMemoireService){
			if (this.jeuMemoireService.checkNumber(this.getFirstNumber())== null){
				if (this.jeuMemoireService.checkNumber(this.getSecondNumber())== null){
					if (this.jeuMemoireService.gamerPlay(this.getFirstNumber(),this.getSecondNumber()) == null){
						this.premierFruit = this.fruits[this.getFirstNumber()];
						this.deuxiemeFruit = this.fruits[this.getSecondNumber()];
						this.fruits = this.jeuMemoireService.getFruitsList();
						this.previousGamer = this.activeGamer;
						this.activeGamer = this.jeuMemoireService.nextGamer();
						this.jeuMemoireGameForm.setValue({firstNumber:"",secondNumber:""});
						const messageFinal = this.jeuMemoireService.gameEnd();
						if (messageFinal != null) {
							this.messageFinal = messageFinal;
						}
					} else  {
						this.premierFruit = this.jeuMemoireService.gamerPlay(this.getFirstNumber(),this.getSecondNumber());
						this.deuxiemeFruit = "";
					}			
				} else {
				this.premierFruit = "";
				this.deuxiemeFruit = this.jeuMemoireService.checkNumber(this.getSecondNumber()); 
				}				
			} else {
				this.premierFruit = this.jeuMemoireService.checkNumber(this.getFirstNumber());
				this.deuxiemeFruit = ""; 
				}			
		}		
	}
	
	gameTerminated(): boolean {
		return (this.messageFinal != null);
	}
	
	replay(): void {
		this.resetFields();
		this.resetGamers();
		this.activeGamer = this.jeuMemoireService.getActiveGamer();		
	}
	
	resetFields(): void {
		this.fruits = this.fruitsInitial;
		this.jeuMemoireGameForm.setValue({firstNumber:"",secondNumber:""});
		this.premierFruit = "";
		this.deuxiemeFruit = "";
		this.previousGamer = null;
		this.messageFinal = null;
	}
	
	resetGamers(): void {
		if (this.jeuMemoireService){	
			this.jeuMemoireService.resetActiveGamer();
			this.jeuMemoireService.resetGamerScore();
		}
	}
}
