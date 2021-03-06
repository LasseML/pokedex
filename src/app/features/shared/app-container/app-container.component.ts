import {Component} from '@angular/core';

@Component({
  selector: 'app-container',
  styleUrls: ['app-container.component.css'],
  template: `
    <app-navbar></app-navbar>
    <div class="container">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `.container {
      max-width: 75em;
      width: 100%;
      margin: 0 auto;
      padding: 0 1.5em;
    }`
  ]
})

export class AppContainerComponent{

}
