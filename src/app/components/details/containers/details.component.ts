import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonDetailService } from '../services/detail.service';
import { Pokemon } from '../../../models/pokemon.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  private readonly pokemonName: string = '';
  constructor(
    private readonly route: ActivatedRoute,
    private readonly pokemonDetailService: PokemonDetailService) {
    this.pokemonName = this.route.snapshot.paramMap.get('name');
  }

  ngOnInit(): void {
    this.pokemonDetailService.fetchPokemonByName(this.pokemonName);
  }

  getPokemon(): Pokemon {
    return this.pokemonDetailService.pokemon;
  }

}
