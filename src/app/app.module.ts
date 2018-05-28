import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GameSelectorComponent } from './components/game-selector/game-selector.component';
import { GameComponent } from './components/game/game.component';
import { TeamComponent } from './components/team/team.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ScoresComponent } from './components/scores/scores.component';
import { LoginComponent } from './components/login/login.component'

import { GamesService } from './services/games/games.service';
import { AuthenticationService } from './services/authentication/authentication.service';
import { LoginGuard } from './guards/login/login-guard.guard';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    GameSelectorComponent,
    GameComponent,
    TeamComponent,
    NavBarComponent,
    ScoresComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AuthenticationService,
    GamesService,
    LoginGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
