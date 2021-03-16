import { Component, OnInit } from '@angular/core';
import {SessionService} from '../../../session/session.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private readonly sessionService: SessionService) {
  }

  get hasActiveSession(): boolean {
    return this.sessionService.active();
  }

  ngOnInit(): void {
  }

}
