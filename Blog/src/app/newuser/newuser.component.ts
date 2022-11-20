import { Component } from '@angular/core';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent {
  newUser = {
    userId: '',
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: ''
  }
}
