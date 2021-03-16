import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PokemonContainerComponent} from './features/pokemon/containers/pokemon/pokemon-container.component';
import {LoginContainer} from './features/login/containers/login/login.container';
import {SessionGuard} from './guards/session.guard';
import {TrainerContainerComponent} from './features/trainer/containers/trainer-container.component';


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
    component: PokemonContainerComponent,
    canActivate: [SessionGuard]
  },
  /*{
    path: 'pokemon/:name',
    component: PokemonDetailContainer,
    canActivate: [SessionGuard]
  },*/
  {
    path: 'trainer',
    component: TrainerContainerComponent,
    canActivate: [SessionGuard]
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
