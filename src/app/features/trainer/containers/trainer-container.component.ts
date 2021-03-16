import {Component, OnInit} from '@angular/core';
import {Pokemon} from '../../../models/pokemon.model';
import {getStorage} from '../../../utils/storage.utils';

@Component({
  selector: 'app-trainer-container',
  templateUrl: './trainer-container.component.html'
})
export class TrainerContainerComponent implements OnInit {
  get pokemon(): Pokemon[] {
    const existingCollection: any = getStorage('collection');
    return existingCollection;
  }

  ngOnInit(): void {
    return;
  }
}
