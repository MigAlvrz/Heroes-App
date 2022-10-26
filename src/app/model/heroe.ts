export class Heroe {
  name: string = '';
  alterEgo: string = '';
  id: number = Math.floor(Math.random() * Date.now())

  constructor(name: string, alterEgo: string) {
    this.name = name;
    this.alterEgo = alterEgo;
  }
}


