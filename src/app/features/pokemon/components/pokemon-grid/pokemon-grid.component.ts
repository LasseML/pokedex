import {Component, Input} from '@angular/core';
import {Pokemon} from '../../../../models/pokemon.model';

@Component({
  selector: 'app-pokemon-grid',
  templateUrl: 'pokemon-grid.component.html',
  styleUrls: ['pokemon-grid.component.scss']
})

export class PokemonGridComponent {
  @Input() pokemon: Pokemon[] = [];
}
