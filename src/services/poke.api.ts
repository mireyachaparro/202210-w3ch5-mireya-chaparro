//import { IPoke } from '../models/poke';
export class PokeApi {
  urlDefault: string;
  constructor() {
    this.urlDefault = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';
  }

  // read / get
  getPoke(): Promise<Array<PokeApi>> {
    return fetch(this.urlDefault).then((response) => response.json());
  }

  getNextPoke(nextUrl: any) {
    return fetch(nextUrl).then((response) => response.json());
  }

  getPreviousPoke(previousUrl: any) {
    return fetch(previousUrl).then((response) => response.json());
  }
}
/*export class PokeApi {
  url: string;
  constructor() {
    this.url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';
  }

  // read / get
  getPoke(): Promise<Array<PokeApi>> {
    return fetch(this.url).then((response) => response.json());
  }
}*/
/*  // create / post
  createTask(task: IPoke): Promise<IPoke> {
    return fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(task),
      headers: {
        'content-type': 'application/json',
      },
    }).then((response) => response.json());
  }

  // delete
  deleteTask(id: number): Promise<Response> {
    return fetch(`${this.url}/${id}`, {
      method: 'DELETE',
    });
  }

  // uptate / patch
  updateTask(id: number, partialTask: Partial<IPoke>): Promise<IPoke> {
    return fetch(`${this.url}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(partialTask),
      headers: {
        'content-type': 'application/json',
      },
    }).then((response) => response.json());
  }
}*/ //
