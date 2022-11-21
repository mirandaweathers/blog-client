import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentUser:User|undefined;

  constructor(private authsvc:AuthService, private route:Router) {
  }

  logout() {
    this.authsvc.LogOut();
  }

  ngOnInit(): void {
    // set current user based on auth service
    this.currentUser = this.authsvc.GetCurrentUser();

    // subscribe to loggedIn event
    this.authsvc.loggedIn.subscribe((data) => {
      if(data) {
        // user logged in
        this.currentUser = this.authsvc.GetCurrentUser();
      } else {
        // user not logged in
        this.currentUser = undefined;
        // when logging out, redirect
        this.route.navigate(['/']);
      }
    })
  }
}
