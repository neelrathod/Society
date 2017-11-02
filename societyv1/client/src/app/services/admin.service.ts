import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { UserService } from './user.service';

@Injectable()
export class AdminService {

  constructor(private http: Http,  private userService : UserService) { }

  
  
  getUnpaid(unpaidUsers : any){
      return this.http.post("http://localhost:4000/api/admin", unpaidUsers, {headers : this.userService.headers})
  }
  


  getpaid(paidUsers : any){
    return this.http.post("http://localhost:4000/api/admin/paid", paidUsers, {headers : this.userService.headers});
  }

}
