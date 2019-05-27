import { Component, OnInit } from '@angular/core';
//import { Hero } from '../registeredlist';


@Component({
  selector: 'app-registeredlist',
  templateUrl: './registeredlist.component.html',
  styleUrls: ['./registeredlist.component.css']
})
export class RegisteredlistComponent implements OnInit {

	// hero: Hero = {
	//     id: 1,
	//     name: 'Windstorm'
  	// };
  constructor() { }

  ngOnInit() {
  	//hero = 'Windstorm';
  }

}
