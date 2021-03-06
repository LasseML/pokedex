import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AppRoutes} from "../../../../enums/app-routes.enum";

@Component({
  selector: 'app-login-container',
  templateUrl: './login.container.html'
})

export class LoginContainer {

  constructor(private router: Router) { }

  handleLoginSuccess():void {
    this.router.navigate([AppRoutes.POKEMON]);
  }

}
