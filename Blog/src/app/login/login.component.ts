import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userId = '';
  password = '';

  // server-side error flag
  serverError:boolean = false;
  serverErrMsg:string = '';

  constructor(private authsvc:AuthService, private router:Router) {
    
  }

  loginFormGroup = new FormGroup ({
    formUserId: new FormControl('', [Validators.required]),
    formPassword: new FormControl('', [Validators.required])
  })

  ClearForm() {
    this.loginFormGroup.reset();
  }

  Login() {
    this.userId = this.loginFormGroup.controls.formUserId.value!;
    this.password = this.loginFormGroup.controls.formPassword.value!;
    // wait for response then get token or handle error
    this.authsvc.Login(this.userId, this.password).subscribe({
      next: (token) => {
        // use token from authservice to set current user
        this.authsvc.SetCurrentUser(token);
        // console.log(token);
        // redirect to home
        this.router.navigate(['/']);
      }, 
      error: (err) => {
        // get server error message to display to user
        this.serverError = true;
                    
        switch(err.error.status) {
          case '401':
            this.serverErrMsg = 'Please enter valid login credentials.';
            break;
          default:
            this.serverErrMsg = 'There was a problem logging in. Please try again!';
        }
      },
      complete: () => {
        // console.log('logged in');
      }
    });


    // let result = this.authsvc.Login(this.userId, this.password);
    // if(result) {
    //   this.router.navigate(['/']);
    // } else {
    //   this.error = true;
    // }
  }
}
