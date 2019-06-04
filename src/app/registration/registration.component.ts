import { Component, OnInit, Input } from '@angular/core';

import { User } from './user';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit() {
    console.log("RegistrationComponent onInit");
    this.user = {
      id: 1,
      email: "winzter@gmail.com",
      password: 'password',
      firstname: 'jonh',
      lastname: 'doe',
      street: 'heloo', // Apartment, studio, or floor
      city: 'city',
      province: 'manila',
      zipcode: '1220'
    }
  }

  register(): void {
      console.log('Register');
  }

}
