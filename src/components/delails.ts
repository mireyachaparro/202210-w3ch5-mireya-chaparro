import { PokeApi } from '../services/poke.api.js';
import { Component } from './component.js';

export class Details extends Component {
  template!: string;

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
    //console.log(this.pokemons.results.url);
    this.pokemonsInfo = await Promise.all(
      pokemonArr.map((url: string) => fetch(url).then((r) => r.json()))
    );
    this.manageComponent();
  }

  manageComponent() {
    this.template = this.createTemplate();
    this.render(this.selector, this.template);
  }

  createTemplate() {
    this.template = 'Hola';
    return this.template;
  }
}
