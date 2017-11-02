import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";

@Injectable()
export class UserService {

  emailToken = "";
  userID = "";



  constructor(private http: Http) { }

  //Add Users
  addUser(newUser: any) {
    return this.http.post("http://localhost:4000/api/signup", newUser)
  }

  //For Login
  login(login) {
    return this.http.post("http://localhost:4000/api/login", login)
  }

  getUserid(id) {
    this.userID = id;
  }


}
