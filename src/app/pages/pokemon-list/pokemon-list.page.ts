import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonResponse {
  results: Pokemon[];
}

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.page.html',
  styleUrls: ['./pokemon-list.page.scss']
})
export class PokemonListPage implements OnInit {
  pokemons: Pokemon[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.loadPokemons(); // Mova o loadPokemons para o ngOnInit
  }

  loadPokemons() {
    this.http.get<PokemonResponse>('https://pokeapi.co/api/v2/pokemon?limit=20')
      .subscribe((data) => {
        this.pokemons = data.results;
      });
  }

  viewDetails(pokemon: Pokemon) {
    const id = pokemon.url.split('/').filter(Boolean).pop();
    this.router.navigate(['/pokemon-details', id]);
  }
}
