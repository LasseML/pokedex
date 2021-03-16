import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {map, shareReplay} from 'rxjs/operators';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Pokemon} from '../../../models/pokemon.model';
import {PokemonResponse} from '../../../models/pokemon-response.model';

const { pokeAPI } = environment;

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  // @ts-ignore
  private readonly pokemonCache$;
  public pokemon: Pokemon[] = [];
  public error: string = '';

  // gets a list of pokemons from the api
  constructor(private readonly http: HttpClient) {
    this.pokemonCache$ = this.http.get<PokemonResponse>(`${pokeAPI}/pokemon?limit=151`)
      .pipe(shareReplay(1));
  }

  // pipes pokemons to pokemoncache, adds id and image url
  fetchPokemon(): void {
    this.pokemonCache$
      .pipe(
        map((response: PokemonResponse) => {
          // @ts-ignore
          return response.results.map((pokemon: Pokemon) => ({
            ...pokemon,
            ...this.getIdAndImage(pokemon.url)
          }));
        })
      ).subscribe(
          (pokemon: Pokemon[]) => {
          this.pokemon = pokemon;
        },
          (errorResponse: HttpErrorResponse) => {
          this.error = errorResponse.message;
        }
    );
  }
  // gets returnes pokemon image and id
  private getIdAndImage(url: string): any {
    const id = url.split('/').filter(Boolean).pop();
    return {
      id: Number(id),
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
    };
  }
}
