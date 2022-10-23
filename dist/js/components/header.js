import { Component } from './component.js';
export class Header extends Component {
    selector;
    template;
    constructor(selector) {
        super();
        this.selector = selector;
        this.template = this.createTemplate();
        this.renderOuter(this.selector, this.template);
    }
    createTemplate() {
        return `<header>
            <h1>Pokemons</h1></header>
        `;
    }
}
