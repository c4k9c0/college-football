import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.less']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.config = [
      {
        icon: 'fa-football-ball',
        route: '/games'
      },
      {
        icon: 'fa-trophy',
        route: '/scores'
      }
    ];
  }

}
