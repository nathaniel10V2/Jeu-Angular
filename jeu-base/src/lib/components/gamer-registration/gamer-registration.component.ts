import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSelectionList } from '@angular/material/list';

import { GameBaseService } from '../../services/game-base.service';
import { Gamer } from '../../models/gamer';

@Component({
    selector: 'gamer-registration',
    templateUrl: './gamer-registration.component.html',
    styleUrl: './gamer-registration.component.scss',
    standalone: false
})
export class GamerRegistrationComponent implements OnInit {
	
  	@Input() title: string|undefined;

	@Input() gameService: GameBaseService|undefined|null;
	
	@Input() gameLink: string|undefined;
	
	@ViewChild('gamerSelection') selectionList: MatSelectionList|undefined;
	
	registrationForm: FormGroup;
	
	gamerList: Array<Gamer>|undefined;
	 	
	constructor(private formBuilder: FormBuilder, 
				private router: Router) {
		this.registrationForm = this.formBuilder.group({
			name: ['', [Validators.required]]
		});
		
	}
	
	ngOnInit(): void {
		if (this.gameService != null) {
			this.gamerList = this.gameService.getGamerList();
		}
	}
	
	onSubmit(): void {
		let gamerNameControl = this.registrationForm.get('name');
		if (gamerNameControl != null) {
			const gamerName = gamerNameControl.value;
			console.log("Joueur saisi: " + gamerName);
			if (this.gameService != null && gamerName){
				this.gameService.newGamer(gamerName);
				gamerNameControl.setValue(null);
			} 
		}
	}
	
	deleteGamer(){
		if (this.selectionList && this.gameService) {
	    	const selected: Gamer[] = this.selectionList.selectedOptions.selected.map(s => s.value);			
			if ((selected != null) && (selected.length > 0)) {
				selected.forEach(gamer => {
				console.log("Joeurs a supprimé: " + gamer.name);
					if (this.gameService != null) {	
						this.gameService.deleteGamer(gamer);							
					}
				});				
				if (this.gameService != null) {					
					this.gamerList = this.gameService.getGamerList();
				}
			}		
		}
	}
	
	isGamerSelected(): boolean {
		if (this.selectionList) {
	    	const selected: Gamer[] = this.selectionList.selectedOptions.selected.map(s => s.value);			
			if ((selected != null) && (selected.length > 0)) {
				return true;
			}		
		}		
		return false;	
	}
	
	isCanPlay(): boolean {
		if (this.gamerList != null && this.gamerList.length > 1) {
	    	return true;		
		}		
		return false;	
	}
	
	startPlay(): void {
		if (this.gameLink){
			this.router.navigateByUrl(this.gameLink);
		}
	}	
}
