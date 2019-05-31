import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Hero } from '../hero';
//import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

//import { MessageService } from './message.service';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  //hero = 'Windstorm';
  //hero: Hero = {
  //id: 1,
  //name: 'Windstorm'
  //};

  //heroes = HEROES;
  heroes: Hero[]; // implements Via Service
  selectedHero: Hero;

  //constructor() { }
  constructor(private heroService: HeroService) { }
  //constructor(private messageService: MessageService) { }

  /**
  Angular calls ngOnInit shortly after creating a component
  */
  ngOnInit() {
    this.getHeroes();
  }



  onSelect(hero: Hero): void {
    console.log(hero);
    this.selectedHero = hero;
  }

  getHeroes(): void {
          //this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);

    // TODO: send the message _after_ fetching the heroes
    // this.messageService.add('HeroService: fetched heroes');
    // return of(HEROES);
  }

  add(name: string): void {
      name = name.trim();
      if (!name) { return; }
      this.heroService.addHero({ name } as Hero)
        .subscribe(hero => {
          this.heroes.push(hero);
        });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}
