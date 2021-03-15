import {Pokemon} from './pokemon.model';

export interface PokemonResponse {
  next: string;
  previous: string;
  results: Pokemon[];
  count: number;
}
