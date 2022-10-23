import { PokeApi } from '../services/poke.api.js';
import { Component } from './component.js';
export class Details extends Component {
    selector;
    template;
    pokemons;
    pokemonsInfo;
    api;
    constructor(selector) {
        super();
        this.selector = selector;
        this.api = new PokeApi();
        this.pokemons = '';
        this.pokemonsInfo = '';
        this.startFetch();
    }
    async startFetch() {
        this.pokemons = await this.api.getPoke();
        const pokemonArr = [];
        this.pokemons.results.forEach((item) => {
            pokemonArr.push(item.url);
        });
        //console.log(this.pokemons.results.url);
        this.pokemonsInfo = await Promise.all(pokemonArr.map((url) => fetch(url).then((r) => r.json())));
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
