import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { AuthenticationService } from './services/authentication/authentication.service';
import { LoginGuard } from './guards/login/login-guard.guard';

export const COMPONENTS = [
  LoginComponent,
  NavBarComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  providers: [
    AuthenticationService,
    LoginGuard
  ]
})
export class CoreModule { }
