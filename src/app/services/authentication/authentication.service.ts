import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';
declare const FB: any;

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient) {
    FB.init({
      appId      : '544256479292363',
      status     : false, // the SDK will attempt to get info about the current user immediately after init
      cookie     : false,  // enable cookies to allow the server to access
      // the session
      xfbml      : false,  // With xfbml set to true, the SDK will parse your page's DOM to find and initialize any social plugins that have been added using XFBML
      version    : 'v2.8' // use graph api version 2.5
    });
  }

  login (): Observable<any> {
     return Observable.create(function (obs) {
       FB.login(data => {
         // Once you have the access token call your auth method and construct your JWT
         FB.api(`/me?access_token=${data.authResponse.accessToken}`, user => {
           // TODO: This should be a user object
           obs.next({
             name: user.name,
             id: user.id
           });
         });
       });
     });
  }
}
