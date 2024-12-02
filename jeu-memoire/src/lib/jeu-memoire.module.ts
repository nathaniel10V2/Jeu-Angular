import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { JeuMemoireGameComponent } from './components/game/jeu-memoire-game.component';
import { JeuMemoireGamerComponent } from './components/gamer/jeu-memoire-gamer.component';
import { GameBaseModule } from 'jeu-base';

const components = [
	JeuMemoireGameComponent,
	JeuMemoireGamerComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
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
export class JeuMemoireModule { }
