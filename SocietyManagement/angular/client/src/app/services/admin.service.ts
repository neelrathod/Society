import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { UserService } from './user.service';

@Injectable()
export class AdminService {
  token;
  headers = new Headers({ "accesstoken": this.getToken() });

  constructor(private http: Http) { }

  getToken() {
    this.token = window.localStorage.getItem('accesstoken');
    console.log(this.token)
    return this.token;
  }

  getUnpaid(unpaidUsers: any) {
    console.log(this.headers);
    return this.http.post("http://localhost:4000/api/admin", unpaidUsers, { headers: this.headers })
  }

  getpaid(paidUsers: any) {
    return this.http.post("http://localhost:4000/api/admin/paid", paidUsers, { headers: this.headers });
  }
}
