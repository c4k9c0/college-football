import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GameSelectorComponent } from './components/game-selector/game-selector.component';
import { GameComponent } from './components/game/game.component';
import { TeamComponent } from './components/team/team.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { GamesService } from './services/games/games.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    GameSelectorComponent,
    GameComponent,
    TeamComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [GamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
