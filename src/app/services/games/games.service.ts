import { Injectable } from '@angular/core';

import { Team } from '../../classes/Team';
import { Game } from '../../classes/Game';

@Injectable ()
export class GamesService {

  constructor () { }

  getGames (): Game[] {
    return [
      new Game(new Team("Texas", 48), new Team("TAMU", 49)),
      new Game(new Team("Texas Tech", 50), new Team("TCU", 56)),
      new Game(new Team("Kansas", 4), new Team("Kansas State", 3)),
      new Game(new Team("Alabama", 2), new Team("Clemson", 19))
    ];
  };

}
