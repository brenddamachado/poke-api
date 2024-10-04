import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';  // Importar Router para navegação

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.page.html',
  styleUrls: ['./pokemon-list.page.scss'],
})
export class PokemonListPage implements OnInit {
  pokemons: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.loadPokemons();
  }

  loadPokemons() {
    this.http.get('https://pokeapi.co/api/v2/pokemon?limit=20').subscribe((data: any) => {
      this.pokemons = data.results;
    });
  }

  getPokemonImage(pokemonUrl: string): string {
    const id = pokemonUrl.split('/').filter(Boolean).pop();
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }

  // Método para navegar para a página de detalhes
  viewDetails(pokemon: any) {
    const id = pokemon.url.split('/').filter(Boolean).pop();
    this.router.navigate(['/pokemon-details', id]);
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
}
