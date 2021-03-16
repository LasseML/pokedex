import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from '../../../../models/pokemon.model';
import {getStorage, setStorage} from '../../../../utils/storage.utils';

@Component({
  selector: 'app-pokemon-profile-header',
  templateUrl: './pokemon-profile-header.component.html',
  styleUrls: ['pokemon-profile-header.component.scss']
})
/*
* Initializes the users collection of pokemon
* onCollectPokemon adds the current looked at pokemon to the users collection
*/
export class PokemonProfileHeaderComponent implements OnInit{
  @Input() pokemon!: Pokemon;
  public isButtonVisible = true;
  ngOnInit() {
    const existingCollection: Pokemon[] | null = getStorage('collection');
    if (existingCollection === null) {
      setStorage('collection', []);
    } else if(existingCollection !== null) {
      const checkCollected = (pokeName: any) => existingCollection.some( ({name}) => name == pokeName);
      if (checkCollected(this.pokemon.name)){
        this.isButtonVisible = false;
      }
    }
  }

  onCollectPokemon(pokemon: Pokemon) {
    const existingCollection: any = getStorage('collection');

    const pokeArr = {
      id: pokemon.id,
      height: pokemon.height,
      image: pokemon.image,
      name: pokemon.name,
      sprite: pokemon.sprites,
      stats: pokemon.stats,
      type: pokemon.types,
      weight: pokemon.weight,
      url: pokemon.url
    };
    existingCollection.push(pokeArr);
    setStorage('collection', existingCollection);
    this.isButtonVisible = false;
    console.log(existingCollection);
  }
}
