import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs/observable/combineLatest';

import * as _ from "lodash";

import { AuthenticationService } from '../../services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    combineLatest(
      this.route.queryParams,
      this.authService.login()
    ).subscribe((data) => {
      localStorage.setItem('userToken', data[1]);
      let redirect = _.has(data[0], 'redirect') ? data[0].redirect : '/games';
      this.router.navigate([redirect]);
    });
  }
}
