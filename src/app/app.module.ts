import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {PokemonContainer} from './features/pokemon/containers/pokemon/pokemon.container';
import {PokemonGridComponent} from './features/pokemon/components/pokemon-grid/pokemon-grid.component';


@NgModule({
  declarations: [
    AppComponent,
    PokemonContainer,
    PokemonGridComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
