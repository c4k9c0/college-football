import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameSelectorComponent } from './games-module/components/game-selector/game-selector.component';
import { LoginComponent } from './core-module/components/login/login.component';
import { ScoresComponent } from './scores-module/components/scores/scores.component';

import { LoginGuard } from './core-module/guards/login/login-guard.guard';

// TODO Allow module to do their own routing
const routes: Routes = [
  {
    canActivate: [LoginGuard],
    component: GameSelectorComponent,
    path: 'games'
  },
  {
    canActivate: [LoginGuard],
    component: ScoresComponent,
    path: 'scores'
  },
  {
    component: LoginComponent,
    path: 'login'
  },
  {
    canActivate: [LoginGuard],
    path: '**',
    redirectTo: 'games'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
