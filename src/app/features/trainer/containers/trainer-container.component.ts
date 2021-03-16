import {Component, OnInit} from '@angular/core';
import {Pokemon} from '../../../models/pokemon.model';

@Component({
  selector: 'app-trainer-container',
  templateUrl: './trainer-container.component.html'
})
export class TrainerContainerComponent implements OnInit {

  constructor() {
  }

  get pokemon(): Pokemon[] {
    return [];
  }


  ngOnInit(): void {
    return;
  }
}
