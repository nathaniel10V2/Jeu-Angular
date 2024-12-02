import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JeuCartesComponent } from './components/jeu-cartes.component';
import { GameBaseModule } from 'jeu-base';

const components = [
	JeuCartesComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
	GameBaseModule
  ],
  exports: 	[...components],
})
export class JeuCartesModule { }
