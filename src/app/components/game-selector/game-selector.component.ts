import { Component, OnInit } from '@angular/core';
import { Team } from '../../classes/Team';
import { Game } from '../../classes/Game';

@Component({
  selector: 'game-selector',
  templateUrl: './game-selector.component.html',
  styleUrls: ['./game-selector.component.css']
})
export class GameSelectorComponent implements OnInit {

  games: Game[];

  constructor() {
    this.games = [new Game(new Team("Texas"), new Team('TAMU'))];
  }

  ngOnInit() {
  }
}
