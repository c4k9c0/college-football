import { Team } from './team';

export class Game {
  home: Team;
  away: Team;
  constructor(home: Team, away: Team) {
    this.home = home;
    this.away = away;
  }
}
