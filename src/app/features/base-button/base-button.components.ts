import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-base-button',
  templateUrl: './base-button.components.html',
  styleUrls: ['./base-button.components.scss']
})
export class BaseButtonComponent {
  @Input() disabled: boolean = false;
}
