import { PokeApi } from '../services/poke.api.js';
import { Component } from './component.js';
// import { Details } from './delails.js';
export class Main extends Component {
    selector;
    template;
    pokemons;
    pokemonsNext;
    pokemonsPrevious;
    pokemonsInfo;
    pokemonsInfoNext;
    pokemonsInfoPrevious;
    api;
    constructor(selector) {
        super();
        this.selector = selector;
        this.api = new PokeApi();
        this.pokemons = '';
        this.pokemonsNext = '';
        this.pokemonsPrevious = '';
        this.pokemonsInfo = '';
        this.pokemonsInfoNext = '';
        this.pokemonsInfoPrevious = '';
        this.startFetch();
    }
    async startFetch() {
        this.pokemons = await this.api.getPoke();
        const pokemonArr = [];
        this.pokemons.results.forEach((item) => {
            pokemonArr.push(item.url);
        });
        // console.log(this.pokemons);
        this.pokemonsInfo = await Promise.all(pokemonArr.map((url) => fetch(url).then((r) => r.json())));
        // console.log(this.pokemonsInfo[1].abilities);
        this.NextFetch();
        this.manageComponent();
    }
    async NextFetch() {
        this.pokemonsNext = await this.api.getNextPoke(this.pokemons.next);
        const pokemonArrNext = [];
        this.pokemonsNext.results.forEach((item) => {
            pokemonArrNext.push(item.url);
        });
        this.pokemonsInfoNext = await Promise.all(pokemonArrNext.map((url) => fetch(url).then((r) => r.json())));
    }
    async PreviousFetch() {
        this.pokemonsPrevious = await this.api.getPreviousPoke(this.pokemons.previous);
        const pokemonArrPrevious = [];
        this.pokemonsPrevious.results.forEach((item) => {
            pokemonArrPrevious.push(item.url);
        });
        this.pokemonsInfoPrevious = await Promise.all(pokemonArrPrevious.map((url) => fetch(url).then((r) => r.json())));
    }
    manageComponent() {
        this.template = this.createTemplate();
        this.render(this.selector, this.template);
        document.querySelector('.previous')?.addEventListener('click', () => {
            this.pokemonsInfo = this.pokemonsInfoPrevious;
            this.pokemons = this.pokemonsPrevious;
            this.NextFetch();
            this.PreviousFetch();
            this.manageComponent();
        });
        document.querySelector('.next')?.addEventListener('click', () => {
            this.pokemonsInfo = this.pokemonsInfoNext;
            this.pokemons = this.pokemonsNext;
            this.NextFetch();
            this.PreviousFetch();
            this.manageComponent();
        });
        // document.querySelector('img')?.addEventListener('click', () => {
        //   new Details('main');
        // });
    }
    createTemplate() {
        this.template = '';
        this.pokemonsInfo.forEach((pokemon) => {
            this.template += `<div class="poke"><h2>${pokemon.species.name}</h2>`;
            this.template += `<img src="${pokemon.sprites.front_default}" alt="" width="100"></div>`;
        });
        this.template += `<div class="buttons"><button class="previous" type="submit">Previous</button>
        <button class="next" type="submit">Next</button></div>`;
        return this.template;
    }
}
