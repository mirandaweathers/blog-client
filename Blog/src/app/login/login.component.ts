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
    let result = this.authsvc.Login(this.userId, this.password);
    if(result) {
      this.router.navigate(['/']);
    } else {
      this.error = true;
    }
  }
}
