import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { CoreModule } from './core-module/core.module';
import { GamesModule } from './games-module/games.module';
import { ScoresModule } from './scores-module/scores.module';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    GamesModule,
    HttpClientModule,
    ScoresModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
