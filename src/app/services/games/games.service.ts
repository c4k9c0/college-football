import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import { Game } from '../../classes/Game';

@Injectable ()
export class GamesService {

  constructor (private http: HttpClient) { }

  getGamesHttp (): Observable<Game[]> {
    return this.http.get<Game[]>('http://localhost:3000/games');
  };
}
