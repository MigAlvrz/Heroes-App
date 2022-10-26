import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Heroe } from '../model/heroe';

@Injectable({
  providedIn: 'root'
})
export class HeroesServiceService {

  heroes: Array<Heroe> =  [
    new Heroe("Daredevil", "Matt Murdock"),
    new Heroe("Spiderman", "Peter Parker"),
    new Heroe("Spiderwoman", "Jessica Drew"),
    new Heroe("Superman", "Clark Ken"),
    new Heroe("Cíclope", "Scott Summers"),
    new Heroe("Tormenta", "Ororo Iqadi"),
    new Heroe("Batman", "Bruce Wayne")
  ];
  selectedHero: any;
  isUpdated: Subject<any> = new Subject<any>();

  constructor() { }

  getHeroes = (query?: string) => {
    if (query !== undefined)
      return this.heroes.filter(heroe => heroe.name.toLowerCase().includes(query.toLowerCase()));
    else
      return this.heroes;
  }

  getHeroById = (id : string) => {
    this.selectedHero = this.heroes.filter(heroe => heroe.id === parseInt(id))[0];
    return this.selectedHero
  }

  selectHero = (id?: string) => {
    this.selectedHero = undefined;
    this.selectedHero = id ? this.heroes.filter(heroe => heroe.id === parseInt(id))[0] : undefined;
    this.sendUpdate(true);
  }

  getSelectedHero = () => {
    return this.selectedHero;
  }

  saveHero = (name: string, alterEgo: string) => {
    this.heroes = [new Heroe(name, alterEgo), ...this.heroes];
    return this.heroes.filter(hero => hero.id === hero.id).length > 0;
  }

  deleteHero = (id: number) => {
    this.heroes = this.heroes.filter(hero => hero.id !== id);
    this.sendUpdate(true);
    return this.heroes.filter(hero => hero.id === id).length === 0;
  }

  updateHero = (id: number, name: string, alterEgo: string) => {
    let updatedHero = this.heroes.filter(hero => hero.id === id)[0];
    updatedHero.name = name;
    updatedHero.alterEgo = alterEgo;
    let index = this.heroes.indexOf(updatedHero);
    this.heroes[index] = updatedHero;
    return this.heroes.filter(hero => hero.name === updatedHero.name)
  }

  sendUpdate = (isUpdated: boolean) => {
    this.isUpdated.next({update: isUpdated})
  }

  getUpdate = () => {
    return this.isUpdated.asObservable();
}

}
