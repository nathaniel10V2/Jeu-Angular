import { Component } from '@angular/core';
import { JeuHasardService } from '../../services/jeu-hasard.service';

@Component({
    selector: 'lib-jeu-hasard',
    templateUrl: `./jeu-hasard-gamer.component.html`,
    standalone: false
})
export class JeuHasardGamerComponent {
	
	title: string = "Jeu Hasard";
	
	jeuHasardService: JeuHasardService;
	
	gameLink: string = "/jeu-hasard/game";
	
	constructor(private _jeuHasardService: JeuHasardService) {
		this.jeuHasardService = _jeuHasardService;
	}
}
