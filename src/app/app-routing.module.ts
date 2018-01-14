import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameSelectorComponent } from './components/game-selector/game-selector.component';

const routes: Routes = [
  {
    component: GameSelectorComponent,
    path: 'games'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
