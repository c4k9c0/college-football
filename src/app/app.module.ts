import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GameSelectorComponent } from './components/game-selector/game-selector.component';
import { GameComponent } from './components/game/game.component';
import { TeamComponent } from './components/team/team.component';


@NgModule({
  declarations: [
    AppComponent,
    GameSelectorComponent,
    GameComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }