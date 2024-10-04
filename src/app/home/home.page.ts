import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pokemon: any;
  currentPokemonId: number = 1;

  constructor(private http: HttpClient, private router: Router) {
    this.loadPokemon(this.currentPokemonId);
  }

  loadPokemon(id: number) {
    this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`).subscribe((data) => {
      this.pokemon = data;
    });
  }

  nextPokemon() {
    this.currentPokemonId++;
    this.loadPokemon(this.currentPokemonId);
  }

  viewAllPokemons() {
    this.router.navigate(['/pokemon-list']);
  }

  viewPokemonDetails() {
    this.router.navigate(['/pokemon-details', this.currentPokemonId]);
  }
}
