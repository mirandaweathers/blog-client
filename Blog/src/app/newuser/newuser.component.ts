import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent {
  newUserFormGroup = new FormGroup ({
    formFirstName: new FormControl('', [Validators.required]),
    formLastName: new FormControl('', [Validators.required]),
    formEmail: new FormControl('', [Validators.required, Validators.email]),
    formUserId: new FormControl('', [Validators.required]),
    formPassword: new FormControl('', [Validators.required])
  });

  newUser:User = {
    userId: '',
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: ''
  }

  CreateUser() {
    // validate if 'create account' button clicked
    this.newUserFormGroup.markAllAsTouched();

    // if valid create new user; if not, go back to form w/error messages
    if(this.newUserFormGroup.valid) {
      this.newUser = {
        userId: this.newUserFormGroup.controls.formUserId.value!,
        firstName: this.newUserFormGroup.controls.formFirstName.value!,
        lastName: this.newUserFormGroup.controls.formLastName.value!,
        emailAddress: this.newUserFormGroup.controls.formEmail.value!,
        password: this.newUserFormGroup.controls.formPassword.value!
      }
      console.log(this.newUser);
    } else {
      // alert('invalid');
    }
  }

  ClearForm() {
    this.newUserFormGroup.reset();
  }
}
