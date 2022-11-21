import { EventEmitter, Injectable, Output } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  // @Output decorator = event that outputs loggedIn
  @Output() loggedIn = new EventEmitter<boolean>();

  allUsers:User[] = [{
    userId:'mw',
    firstName:'Miranda',
    lastName:'Weathers',
    emailAddress:'mirandaweathers@gmail.com',
    password:'pw'
  }];

  currentUser:User|undefined;

  constructor() { }

  Login(userId:string,password:string) {
    let user = this.allUsers.find(u => u.userId == userId && u.password == password);
    if(user) {
      this.currentUser = user; // if user found, set current user
      this.loggedIn.emit(true); // emit 'true' event for navbar links to update
      return user.firstName + user.lastName;
    } else {
      return false;
    }
  }

  GetCurrentUser() {
    return this.currentUser;
  }

  LogOut() {
    this.currentUser = undefined;
    this.loggedIn.emit(false);
  }
}
