import * as _ from "lodash";
import { ChangeDetectionStrategy, Component, OnInit, Input } from '@angular/core';

import { Game } from '../../model/Game';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameComponent {

  @Input() game: Game;
  constructor() { }

  selectTeam (selectedTeam) {
    let otherTeam = _.isEqual(selectedTeam, this.game.home) ? this.game.away : this.game.home;
    selectedTeam.selected = true;
    otherTeam.selected = false;
  }
}
