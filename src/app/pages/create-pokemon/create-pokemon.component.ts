import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PokedexService } from 'src/app/shared/pokedex.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-pokemon',
  templateUrl: './create-pokemon.component.html',
  styleUrls: ['./create-pokemon.component.scss']
})
export class CreatePokemonComponent implements OnInit {

  addPokemonForm: FormGroup;

  constructor(private fb: FormBuilder, private pokeService: PokedexService, private router: Router) { }

  ngOnInit() {
    this.addPokemonForm = this.fb.group({
      name : [''],
      description: [''],
      img: [''],
    });
  }

  addPokemon() {
    console.log(this.addPokemonForm.value);
    this.pokeService.pokemons.push(this.addPokemonForm.value);
    this.router.navigate(['']);
  }

}
