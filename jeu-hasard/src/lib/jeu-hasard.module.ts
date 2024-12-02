import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { JeuHasardGameComponent } from './components/game/jeu-hasard-game.component';
import { JeuHasardGamerComponent } from './components/gamer/jeu-hasard-gamer.component';
import { GameBaseModule } from 'jeu-base';

const components = [
	JeuHasardGameComponent,
	JeuHasardGamerComponent	
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
	NgOptimizedImage,
	MatInputModule,
	MatIconModule,
	MatFormFieldModule,
	MatListModule,
	MatGridListModule,
	MatCardModule,
	MatButtonModule,
	ReactiveFormsModule,
	GameBaseModule
  ],
  exports: 	[...components],
})
export class JeuHasardModule { }
