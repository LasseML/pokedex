import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PokemonContainer} from './features/pokemon/containers/pokemon/pokemon.container';
import {LoginContainer} from './features/login/containers/login/login.container';
import {SessionGuard} from './guards/session.guard';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
  },
  {
    path: 'login',
    component: LoginContainer,
  },
  {
    path: 'pokemon',
    component: PokemonContainer,
    canActivate: [SessionGuard]
  },
  /*{
    path: 'pokemon/:name',
    component: PokemonDetailContainer,
    canActivate: [SessionGuard]
  },*/
  {
    path: 'trainer',
    // component: TrainerContainer,
    redirectTo: 'pokemon',
    // canActivate: [SessionGuard]
  },
/*  {
    path: '**',
    component: NotFoundContainer
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
