import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";

@Injectable()
export class VehicleService {

  constructor(private http: Http) { }
   
  addVehicle(newVehicle : any){
      return this.http.post("http://localhost:4000/api/vehicle", newVehicle);
  }
  
  getVehicles(){
      return this.http.get("http://localhost:4000/api/vehicles");
  }

}
