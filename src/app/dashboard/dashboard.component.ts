import { Component, OnInit, Input, Output } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes : Hero[] = [];
  //hero: Hero;
  selectedHero: Hero;

  //constructor() { }
  constructor(private heroService: HeroService) { }

  ngOnInit() {
      this.getHeroes();
  }

  getHeroes(): void {

    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5)); // Retreive Heroes from index 1-5
      // 0,1 - one
      // 0,2 - two
      // 0,3 - three
      // 0,4  -four
  }

  selectHero(id: number): void{
    //this.selectedHero =
    this.heroService.getHero(id)
      //.subscribe(hero => this.selectedHero = hero);
      .subscribe(selectedHero => this.selectedHero = selectedHero)
      ;
      console.log(hero);
      console.log(this.selectedHero);
  }


  //selectedHero: Hero;
  onSelect(hero: Hero): void {
    console.log(hero);
    this.selectedHero = hero;
    // this.heroService.getHero(hero.id)
    //   //.subscribe(hero => this.selectedHero = hero);
    //   .subscribe(selectedHero => this.selectedHero = selectedHero)
    //   ;
    console.log(this.selectedHero);
  }
}
