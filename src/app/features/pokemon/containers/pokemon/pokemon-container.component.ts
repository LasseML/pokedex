import {Component, OnInit} from '@angular/core';
import {PokemonService} from '../../services/pokemon.service';
import {Pokemon} from '../../../../models/pokemon.model';

@Component({
  selector: 'app-pokemon-container',
  templateUrl: './pokemon-container.component.html'
})
export class PokemonContainerComponent implements OnInit {

  constructor(private readonly pokemonService: PokemonService) {
  }

  get pokemon(): Pokemon[] {
    return this.pokemonService.pokemon;
  }

  ngOnInit(): void {
    this.pokemonService.fetchPokemon();
  }
}
