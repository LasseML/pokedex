import { Component, Input } from '@angular/core';
import { Pokemon } from '../../../models/pokemon.model';

@Component({
  selector: 'app-pokemon-profile-header',
  templateUrl: './pokemon-profile-header.html'
})

export class PokemonProfileHeaderComponent {
  @Input() pokemon: Pokemon;
}