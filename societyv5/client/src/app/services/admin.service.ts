import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";

@Injectable()
export class AdminService {

  constructor(private http: Http) { }

  
  
  getUnpaid(unpaidUsers : any){
      return this.http.post("http://localhost:4000/api/admin", unpaidUsers)
  }
  


  getpaid(paidUsers : any){
    return this.http.post("http://localhost:4000/api/admin/paid", paidUsers);
  }

}
