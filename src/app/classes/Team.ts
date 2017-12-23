export class Team {
  name: string;
  id: number;
  selected: boolean;
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
    this.selected = false;
  }
}
