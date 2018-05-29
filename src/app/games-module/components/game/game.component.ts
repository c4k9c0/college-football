import * as _ from "lodash";
import { Component, OnInit, Input } from '@angular/core';

import { Game } from '../../classes/Game';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.less']
})
export class GameComponent implements OnInit {

  @Input() game: Game;
  constructor() { }

  selectTeam (selectedTeam) {
    let otherTeam = _.isEqual(selectedTeam, this.game.home) ? this.game.away : this.game.home;
    selectedTeam.selected = true;
    otherTeam.selected = false;
  }

  ngOnInit() {
  }

}
