import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  pokemon:PokemonData


  constructor(
    private service:PokemonService
  ) {
    this.pokemon = {
      name: '',
      id: 0,
      types: [],
      sprites: {
        front_default: ''
      }
  }
}

  ngOnInit(): void {
    this.searchPokemon('pikachu')
  }

  searchPokemon(searchName:string){
    this.service.getPokemon(searchName).subscribe(
      {
        next: (res) =>{

        this.pokemon = {
          id: res.id,
          name: res.name,
          types: res.types,
          sprites: res.sprites
        }
     },
        error: (err) => console.log('NOT FOUND')
      }
    )
  }

}
