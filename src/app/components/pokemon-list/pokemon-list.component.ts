import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from 'src/app/shared/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  @Input() pokemons: Pokemon;
  @Output() pokemonClick = new EventEmitter<Pokemon>();

  constructor() { }

  ngOnInit() {
  }

  clickPokemon() {
    this.pokemonClick.emit(this.pokemons);
  }
}
