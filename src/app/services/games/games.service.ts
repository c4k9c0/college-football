import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Team } from '../../classes/Team';
import { Game } from '../../classes/Game';

@Injectable ()
export class GamesService {

  constructor (private http: HttpClient) { }

  getGamesHttp (): Observable<Game[]> {
    return this.http.get('http://localhost:3000/games').map(data => {
      console.log(data);
      let testGames: Game[] = [
        new Game(new Team("Texas", 48), new Team("TAMU", 49))
      ];
      return testGames;
    });
  };

  getGames (): Game[] {
    return [
      new Game(new Team("Texas", 48), new Team("TAMU", 49)),
      new Game(new Team("Texas Tech", 50), new Team("TCU", 56)),
      new Game(new Team("Kansas", 4), new Team("Kansas State", 3)),
      new Game(new Team("Alabama", 2), new Team("Clemson", 19))
    ];
  };

}
