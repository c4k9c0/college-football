export class Team {
  name: string;
  id: number;
  wins: number;
  losses: number;
  mascot: string;
  selected: boolean;

  constructor(
    name: string,
    id: number,
    wins: number,
    losses: number,
    mascot: string) {
    this.name = name;
    this.id = id;
    this.wins = wins;
    this.losses = losses;
    this.mascot = mascot;
    this.selected = false;
  }
}
