import { PokeApi } from '../services/poke.api.js';
import { Component } from './component.js';

export class Main extends Component {
  template: any;
  pokemons: any;
  pokemonsInfo: any;
  api: PokeApi;
  constructor(public selector: string) {
    super();
    this.api = new PokeApi();
    this.pokemons = '';
    this.pokemonsInfo = '';
    this.startFetch();
  }

  async startFetch() {
    this.pokemons = await this.api.getPoke();

    const pokemonArr: any = [];
    this.pokemons.results.forEach((item: any) => {
      pokemonArr.push(item.url);
    });

    this.pokemonsInfo = await Promise.all(
      pokemonArr.map((url: any) => fetch(url).then((r) => r.json()))
    );
    // console.log(this.pokemonsInfo);

    this.manageComponent();
  }

  manageComponent() {
    // this.createArrayOfPromises();
    // console.log(this.pokemons
    this.template = this.createTemplate();
    this.renderAdd(this.selector, this.template);
    //new Buttons('.buttons', this.handlePag.bind(this));
  }

  createTemplate() {
    this.template = '';

    console.log(this.pokemonsInfo);
    this.pokemonsInfo.forEach((pokemon: any) => {
      console.log(pokemon);
      this.template += `<div class="poke"><h2>${pokemon.species.name}</h2>`;
      this.template += `<img src="${pokemon.sprites.front_default}" alt="" width="100"></div>`;
    });

    return this.template;
  }
}
//
