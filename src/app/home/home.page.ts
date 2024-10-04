
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pokemon: any;
  currentPokemonId: number = 1;

  constructor(private http: HttpClient) {
    this.loadPokemon(this.currentPokemonId);
  }

  loadPokemon(id: number) {
    this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`).subscribe(data => {
      this.pokemon = data;
    });
  }

  nextPokemon() {
    this.currentPokemonId++;
    this.loadPokemon(this.currentPokemonId);
  }

}
