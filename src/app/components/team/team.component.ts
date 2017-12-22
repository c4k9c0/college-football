import { Component, OnInit, Input } from '@angular/core';

import { Team } from '../../classes/Team';

@Component({
  selector: 'team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.less']
})
export class TeamComponent implements OnInit {

  @Input() team: Team;
  constructor() { }

  ngOnInit() {
  }

}
