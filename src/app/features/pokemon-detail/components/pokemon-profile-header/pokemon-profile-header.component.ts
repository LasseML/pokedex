import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from '../../../../models/pokemon.model';
import {getStorage, setStorage} from '../../../../utils/storage.utils';

@Component({
  selector: 'app-pokemon-profile-header',
  templateUrl: './pokemon-profile-header.component.html'
})

export class PokemonProfileHeaderComponent implements OnInit{
  @Input() pokemon!: Pokemon;

  ngOnInit() {
    const existingCollection = getStorage('collection');
    if (existingCollection === null) {
      setStorage('collection', []);
    }
  }
  onCollectPokemon(pokemon: Pokemon) {
    const existingCollection: any = getStorage('collection');
    existingCollection.push(pokemon);
    setStorage('collection', existingCollection);
    const test: any = getStorage('collection');
    console.log(test);
  }
}
