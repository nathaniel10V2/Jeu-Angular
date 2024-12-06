import { Component } from '@angular/core';
import { JeuMemoireService } from '../../services/jeu-memoire.service';

@Component({
    selector: 'lib-jeu-memoire',
    templateUrl: `./jeu-memoire-gamer.component.html`,
    standalone: false
})
export class JeuMemoireGamerComponent {
	
	title: string = "Jeu Mémoire";
	
	jeuMemoireService: JeuMemoireService;
	
	gameLink: string = "/jeu-memoire/game";
	
	constructor(private _jeuMemoireService: JeuMemoireService) {
		this.jeuMemoireService = _jeuMemoireService;
	}
}
