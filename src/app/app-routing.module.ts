import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesModule } from './games-module/games.module';
import { ScoresModule } from './scores-module/scores.module';

import { LoginGuard } from './core-module/guards/login/login-guard.guard';
import { LoginComponent } from './core-module/components/login/login.component';

const routes: Routes = [
  {
    canActivate: [LoginGuard],
    path: 'games',
    loadChildren: 'app/games-module/games.module#GamesModule'
  },
  {
    canActivate: [LoginGuard],
    path: 'scores',
    loadChildren: 'app/scores-module/scores.module#ScoresModule'
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
