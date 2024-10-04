import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  
@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.page.html',
  styleUrls: ['./pokemon-details.page.scss'],
})
export class PokemonDetailsPage implements OnInit {
  pokemon: any;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadPokemon(id);
    }
  }

  loadPokemon(id: string) {
    this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`).subscribe(data => {
      this.pokemon = data;
    });
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  goToAllPokemons() {
    this.router.navigate(['/pokemon-list']);
  }
}
