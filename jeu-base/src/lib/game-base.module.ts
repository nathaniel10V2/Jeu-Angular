import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { GamerRegistrationComponent } from './components/gamer-registration/gamer-registration.component';
import { GameHomeComponent } from './components/game-home/game-home.component';

const components = [
	GamerRegistrationComponent,
	GameHomeComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
	MatIconModule,
	MatInputModule,
	MatFormFieldModule,
	MatListModule,
	MatGridListModule,
	MatCardModule,
	MatButtonModule,
	RouterOutlet, 
	RouterModule,
	ReactiveFormsModule
  ],
  exports: 	[...components],
})
export class GameBaseModule { }
