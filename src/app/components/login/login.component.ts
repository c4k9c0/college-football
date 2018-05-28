import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    var subscription = this.authService.login().subscribe(user => {
      localStorage.setItem('userToken', user);
      subscription.unsubscribe();
    });
  }

}
