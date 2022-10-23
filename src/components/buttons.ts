import { PokeApi } from '../services/poke.api.js';
import { Component } from './component.js';
import { Main } from './main.js';

export class Buttons extends Component {
  template: string;
  urlDefault = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=20";
  constructor(public selector: string, public handle: () => void) {
    super();
    this.template = this.createTemplate();
    this.renderAdd(this.selector, this.template);
    document
      .querySelector('.next')
      ?.addEventListener('click', (ev: Event) => {
        ev.preventDefault();
        console.log('Tengo que pasar la pagina');
        this.handlePage();
      });
  }
  createTemplate() {
    return `
        <a class="previous" href="">Previous</a>
        <a class="next" href="">Next</a>
        `;
  }
  handlePage() {
    getPoke(): Promise {
    return fetch(this.urlDefault).then((response) => response.json());
  }
  //   for (let count = 0; ; count++) {
  //     count += 20;
  //     console.log(count);
  //   }

  // let count = 0;
  // const next = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${
  //   count + 20
  // }`;
  // count = count + 20;
  // console.log(count);
  //}
}

// import { PokeApi } from '../services/poke.api.js';
// import { Component } from './component.js';

// export class Main extends Component {
//   template: any;
//   api: PokeApi;
//   constructor(public selector: string) {
//     super();
//     this.api = new PokeApi();
//     this.startFetch();
//   }

//   async startFetch() {

//     const pokemonArr: any = [];
//     this.pokemons.results.forEach((item: any) => {
//       pokemonArr.push(item.url);
//     });

//     this.pokemonsInfo = await Promise.all(
//       pokemonArr.map((url: any) => fetch(url).then((r) => r.json()))
//     );
//     // console.log(this.pokemonsInfo);

//     this.manageComponent();
//   }

//   manageComponent() {
//     // this.createArrayOfPromises();
//     // console.log(this.pokemons
//     this.template = this.createTemplate();
//     this.renderAdd(this.selector, this.template);
//   }

//   createTemplate() {
//     this.template = '';

//     console.log(this.pokemonsInfo);
//     this.pokemonsInfo.forEach((pokemon: any) => {
//       console.log(pokemon);
//       this.template += `<a href="${https://pokeapi.co/api/v2/pokemon?limit=20&offset=0}">Previous</a>
//       <a href="">Next</a>`;
//     });

//     return this.template;
//   }
// }
// //
