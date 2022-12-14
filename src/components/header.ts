import { Component } from './component.js';

export class Header extends Component {
  template: string;
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.renderOuter(this.selector, this.template);
  }
  createTemplate() {
    return `<header>
            <h1>Pokemons</h1></header>
        `;
  }
}
