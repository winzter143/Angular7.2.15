import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

    //hero = 'Windstorm';
    hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

   heroes = HEROES;

    constructor() { }

    /**
    Angular calls ngOnInit shortly after creating a component
    */
      ngOnInit() {
      }

      selectedHero: Hero;
      onSelect(hero: Hero): void {
          console.log(hero);
        this.selectedHero = hero;
      }
}
