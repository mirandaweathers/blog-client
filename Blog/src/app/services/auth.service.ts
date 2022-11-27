import { HttpClient } from '@angular/common/http';
import { Token } from '../models/token';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  // @Output decorator = event that outputs loggedIn
  @Output() loggedIn = new EventEmitter<boolean>();

  // allUsers:User[] = [{
  //   userId:'mw',
  //   firstName:'Miranda',
  //   lastName:'Weathers',
  //   emailAddress:'mirandaweathers@gmail.com',
  //   password:'pw'
  // }];

  currentUser:Token|undefined;

  constructor(private httpClient:HttpClient) { 
    // check for saved login token, log in if found
    let yesToken = localStorage.getItem('token');
    if(yesToken) {
      this.currentUser = JSON.parse(yesToken);
    }
  }

  Login(userId:string,password:string) {
    // when token retrieved, return it back to Login component (where this method was called)
    return this.httpClient.get<Token>(`${environment.serverEndpoint}/Users/${userId}/${password}`);
  }

  SetCurrentUser(token:Token) {
    // set current user with generated token from Login
    this.currentUser = token;

    // save token in local storage
    localStorage.setItem('token', JSON.stringify(token));

    // notify navbar & routes of logged in user
    this.loggedIn.emit(true);
  }

  GetCurrentUser() {
    return this.currentUser;
  }

  LogOut() {
    // reset current user and locally stored token
    this.currentUser = undefined;
    localStorage.setItem('token', '');
    this.loggedIn.emit(false);
  }
}
