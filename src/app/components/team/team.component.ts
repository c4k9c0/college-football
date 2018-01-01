import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Team } from '../../classes/Team';

@Component({
  selector: 'team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.less']
})
export class TeamComponent implements OnInit {

  @Input()
  team: Team;

  @Output()
  change: EventEmitter<Team> = new EventEmitter<Team>();

  constructor() { }

  selectTeam () {
    this.change.emit(this.team);
  }

  ngOnInit() {
  }

}
