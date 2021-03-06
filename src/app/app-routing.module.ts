import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokedexPageComponent } from './pages/pokedex-page/pokedex-page.component';
import { CreatePokemonComponent } from './pages/create-pokemon/create-pokemon.component';

const routes: Routes = [
  {
    path: '',
    component: PokedexPageComponent
  },
  {
    path: 'create',
    component: CreatePokemonComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
