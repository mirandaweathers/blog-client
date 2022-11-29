import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class NewuserService {

  constructor(private httpClient:HttpClient) {

  }

  CreateAccount(newUser:User) {
    return this.httpClient.post<User>(`${environment.serverEndpoint}/Users`, newUser);
  }
}
