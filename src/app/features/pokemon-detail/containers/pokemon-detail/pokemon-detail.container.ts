import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PokemonDetailService} from '../../services/pokemon-detail.service';
import {Pokemon} from '../../../../models/pokemon.model';

/*
* Obtains the pokemon we are about to look at that can be used throughout the program
 */
@Component({
  selector: 'app-pokemon-detail-container',
  templateUrl: './pokemon-detail.container.html'
})
export class PokemonDetailContainer implements OnInit {
  private readonly pokemonName: string = '';
  constructor(
    private readonly route: ActivatedRoute,
    private readonly pokemonDetailService: PokemonDetailService) {
    const snapshot = this.route.snapshot.paramMap.get('name');
    if (snapshot !== null) {
      this.pokemonName = snapshot;
    } else {
      this.pokemonName = 'unown';
    }

  }

  ngOnInit(): void {
    this.pokemonDetailService.fetchPokemonByName(this.pokemonName);
  }

  get pokemon(): Pokemon {
    return this.pokemonDetailService.pokemon;
  }
}
