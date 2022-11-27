import { Component } from '@angular/core';
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
  error = false;

  constructor(private authsvc:AuthService, private router:Router) {
    
  }

  Login() {
    // wait for response then get token or handle error
    this.authsvc.Login(this.userId, this.password).subscribe({
      next: (data) => {
        // use token from authservice to set current user
        this.authsvc.SetCurrentUser(data);
        console.log(data);
      }, 
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('logged in');
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
