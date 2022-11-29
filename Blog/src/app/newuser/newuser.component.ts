import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { NewuserService } from '../services/newuser.service';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent {
  constructor(private newUserSvc:NewuserService, private router:Router) {

  }

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

  // server-side error flag
  serverError:boolean = false;
  serverErrMsg:string = '';

  // focus state for hints
  focusState:boolean = false;
  formReset:boolean = false;
  
  CreateUser() {
    // validate if 'create account' button clicked
    this.newUserFormGroup.markAllAsTouched();
    this.serverError = false;

    // if valid create new user; if not, go back to form w/error messages
    if(this.newUserFormGroup.valid) {
      // set new user values
      this.newUser = {
        userId: this.newUserFormGroup.controls.formUserId.value!,
        firstName: this.newUserFormGroup.controls.formFirstName.value!,
        lastName: this.newUserFormGroup.controls.formLastName.value!,
        emailAddress: this.newUserFormGroup.controls.formEmail.value!,
        password: this.newUserFormGroup.controls.formPassword.value!
      }
      // call service to create account
      this.newUserSvc.CreateAccount(this.newUser).subscribe({
        next: (user) => {
          // console.log(user);

          // reset any error messages from previous submission
          this.serverErrMsg = '';

          // redirect to login page?
          this.router.navigate(['/login']);
        },
        error: (err) => {
          // get server error message to display to user
          this.serverError = true;
                    
          switch(err.error.status) {
            case '406':
              this.serverErrMsg = 'Please enter a valid email address.';
              break;
            case '409':
              this.serverErrMsg = 'Username already exists!';
              break;
            default:
              this.serverErrMsg = 'There was a problem creating your account. Please try again!';
          }
        },
        complete: () => {
          // console.log('created');
        }
      });
    } else {
      this.serverErrMsg = 'Please fix errors before creating your account.';
    }
  }

  ClearForm() {
    this.newUserFormGroup.reset();
    this.serverErrMsg = '';
  }
}
