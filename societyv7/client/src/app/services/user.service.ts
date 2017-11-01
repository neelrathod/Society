import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";

@Injectable()
export class UserService {
 
  emailToken = "";
  userID = "";
  
  token;
  headers = new Headers({"accessToken" : this.getToken()});
  
  constructor(private http: Http) { }
  

  // setToken(){
  //   var emailToken = this.emailToken
  // }

  getToken(){
    this.token = window.localStorage.getItem('accessToken');
    return this.token;
  }
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

  getUserid(id){
   this.userID = id ;
  }

  getEmailoken(){
    return this.emailToken = window.localStorage.getItem('emailToken');
  }
}
