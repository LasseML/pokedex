import {Component, OnInit} from '@angular/core';
import {Pokemon} from '../../../models/pokemon.model';
import {getStorage} from '../../../utils/storage.utils';

@Component({
  selector: 'app-trainer-container',
  templateUrl: './trainer-container.component.html'
})

// gets pokemon collection from local storage and returns it to pokemon grid view
export class TrainerContainerComponent implements OnInit {
  get pokemon(): Pokemon[] {
    // cant be done in inline, needs variable declaration or angular brakes
    const existingCollection: any = getStorage('collection');
    return existingCollection;
  }

  ngOnInit(): void {
    return;
  }
}
