 import { Injectable } from '@angular/core';
 import { Pokemon } from '../../../models/pokemon.model';
 import { HttpClient } from '@angular/common/http';
 import { environment } from '../../../../environments/environment';
 import { map } from 'rxjs/operators';
 import {getFrontImageUrl} from '../../../utils/pokemon-image.util';

 const { pokeAPI } = environment;

 @Injectable({
  providedIn: 'root'
 })

 export class PokemonDetailService {

   public pokemon: Pokemon;

  constructor(private readonly http: HttpClient) {
  }


  public fetchPokemonByName(name: string): void {
    this.http.get<Pokemon>('${pokeAPI}/pokemon/${name}')
      .pipe(
        map(pokemon: Pokemon) => ({
          ...pokemon,
          image: getFrontImageUrl(pokemon.id)
        }))
      )
      .subscribe((pokemon:Pokemon) => {
        this.pokemon = pokemon;
    });
  }

 }
