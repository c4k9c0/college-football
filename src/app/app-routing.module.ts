import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginGuard } from './guards/login/login-guard.guard';

import { GameSelectorComponent } from './components/game-selector/game-selector.component';
import { LoginComponent } from './components/login/login.component';
import { ScoresComponent } from './components/scores/scores.component';

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
