import { Injectable } from '@angular/core';
import { UserModel } from '../model/UserModel';
import { UserData } from '../mock/UserData';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public userLogin(user: any): Observable<any> {
    return this.http.post('http://localhost:8000/login', user)
  }

  // constructor() { }

  // private loggedInUser: UserModel | null = null;

  // login(username: string, password: string) : boolean {
  //   const user = UserData.find(u => u.username === username && u.password === password);

  //   if(user) {
  //     this.loggedInUser = user;
  //     return true;
  //   }
  //   return false;
  // }
  // getLoggedInUser(): UserModel | null {
  //   return this.loggedInUser;
  // }
}
