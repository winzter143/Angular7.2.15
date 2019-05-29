import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  //constructor() { }
  constructor(private messageService: MessageService) { }

  //getHeroes(): Hero[] {
  getHeroes(): Observable<Hero[]> {
      // TODO: send the message _after_ fetching the heroes
      this.messageService.add('HeroService: fetched heroes');
    //return HEROES;
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
      console.log(`HeroService: fetched hero id=${id}`);
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
