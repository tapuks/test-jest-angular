import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../interfaces';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-charizard',
  templateUrl: './charizard.component.html',
  styleUrls: ['./charizard.component.scss']
})
export class CharizardComponent implements OnInit {

  public charizard?: Pokemon

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemon(6)
    .subscribe( pokemon => {
      this.charizard = pokemon
    } )

    this.pokemonService.getPokemonPromise(25).then(
      pokemon=> console.log('pokeee', pokemon)
    )
  }

  

}
