import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesRoutingModule } from './games-routing.module';

import { GameSelectorComponent } from './components/game-selector/game-selector.component';
import { GameComponent } from './components/game/game.component';
import { TeamComponent } from './components/team/team.component';

import { GamesService } from './services/games/games.service';

export const COMPONENTS = [
  GameSelectorComponent,
  GameComponent,
  TeamComponent
];

@NgModule({
  imports: [
    CommonModule,
    GamesRoutingModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  providers: [
    GamesService
  ]
})
export class GamesModule { }
