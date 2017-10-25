import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";

@Injectable()
export class SignupService {

  constructor(private http: Http) { }

  //Add Users
  addUser(newUser : any)
  {
    // var headers = new Headers();
    // headers.append("Content-Type", "application/json");

    return this.http.post("http://localhost:4000/api/signup", newUser)
  }

   //For Login
  login(login){
    return this.http.post("http://localhost:4000/api/login", login)
  }
}
