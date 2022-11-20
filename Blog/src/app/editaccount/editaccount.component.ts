import { Component } from '@angular/core';

@Component({
  selector: 'app-editaccount',
  templateUrl: './editaccount.component.html',
  styleUrls: ['./editaccount.component.css']
})
export class EditaccountComponent {
  currentUser = {
    userId: 'sampleId',
    firstName: 'Miranda',
    lastName: 'Weathers',
    emailAddress: 'asdfjkl@abc.com',
    password: 'secret'
  }

  updateUser = {
    userId: '',
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: ''
  }
}
