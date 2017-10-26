import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";

@Injectable()
export class AdminService {

  constructor(private http: Http) { }

  
  
  getUnpaid(){
      return this.http.get("http://localhost:4000/api/admin")
  }
  
  getPaid(){
    return this.http.get("http://localhost:4000/api/admin/paid")
  }

}
