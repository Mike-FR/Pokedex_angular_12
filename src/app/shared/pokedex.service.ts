import { Injectable } from '@angular/core';
import { pokemons } from './pokemons-mock';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  pokemons: Pokemon[];

  constructor() {
    this.pokemons = pokemons;
   }

}
