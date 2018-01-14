import { Component, OnInit } from '@angular/core';
import { Team } from '../../classes/Team';
import { Game } from '../../classes/Game';

import { GamesService } from '../../services/games/games.service';

@Component({
  selector: 'game-selector',
  templateUrl: './game-selector.component.html',
  styleUrls: ['./game-selector.component.css']
})
export class GameSelectorComponent implements OnInit {

  games: Game[];

  constructor(private _gamesService: GamesService) { }

  ngOnInit() {
    this._gamesService.getGamesHttp().subscribe((data) => {
      this.games = data;
    });
  }
}
