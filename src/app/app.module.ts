import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {PokemonContainer} from './features/pokemon/containers/pokemon/pokemon.container';
import {PokemonGridComponent} from './features/pokemon/components/pokemon-grid/pokemon-grid.component';
import { NavbarComponent } from './features/navbar/navbar.component';
import {LoginContainer} from './features/login/containers/login/login.container';
import {LoginFormComponents} from './features/login/components/login-form/login-form.components';
import {BaseButtonComponent} from './features/base-button/base-button.components';
import {PokemonDetailContainer} from './features/pokemon-detail/containers/pokemon-detail/pokemon-detail.container';
import {PokemonProfileHeaderComponent} from './features/pokemon-detail/components/pokemon-profile-header/pokemon-profile-header.component';



@NgModule({
  declarations: [
    AppComponent,
    // Containers
    PokemonContainer,
    PokemonGridComponent,
    LoginContainer,
    PokemonDetailContainer,
    // Components
    NavbarComponent,
    LoginFormComponents,
    BaseButtonComponent,
    PokemonProfileHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
