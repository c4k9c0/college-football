import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameSelectorComponent } from './components/game-selector/game-selector.component';

const routes: Routes = [
  {
    path: '',
    component: GameSelectorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
