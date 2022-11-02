import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient ) { }

  getPokemon(id : number = 25): Observable<Pokemon>{
    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`)
  }

  getPokemonPromise(id: number): Promise<Pokemon | undefined>{
    // return new Promise((resolve, reject) => {
    //   resolve (this.http.get<Pokemon>( `https://pokeapi.co/api/v2/pokemon/${id}` )
    // })
    return this.http.get<Pokemon | undefined>(`https://pokeapi.co/api/v2/pokemon/${id}`).toPromise()
  }
}

