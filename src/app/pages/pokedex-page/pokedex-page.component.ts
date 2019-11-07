import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/shared/pokedex.service';
import { Pokemon } from 'src/app/shared/pokemon';

@Component({
  selector: 'app-pokedex-page',
  templateUrl: './pokedex-page.component.html',
  styleUrls: ['./pokedex-page.component.scss']
})
export class PokedexPageComponent implements OnInit {

  pokemonList: Pokemon[];
  pokemonDetail: Pokemon;
  detail = false;

  constructor(private pokeService: PokedexService) { }

  ngOnInit() {
    this.pokemonList = this.pokeService.pokemons;
    console.log(this.pokemonList);
  }

  showDescription($event) {
    this.pokemonDetail = $event.description;
    this.detail = !this.detail;
    console.log(this.pokemonDetail);
  }
}
