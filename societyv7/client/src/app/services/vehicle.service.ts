import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { UserService } from './user.service';

@Injectable()
export class VehicleService {
    id = ""
    userID = ""
    constructor(private http: Http, private userService : UserService) { }





    getVehicles() {
        return this.http.get("http://localhost:4000/api/vehicles", {headers : this.userService.headers});
    }

    addVehicle(newVehicle: any) {
        return this.http.post("http://localhost:4000/api/vehicle", newVehicle, {headers : this.userService.headers});
    }
    myVehicle() {
        var user_id = window.localStorage.getItem('user_id');
        console.log(user_id);
        return this.http.get("http://localhost:4000/api/vehicle/" + user_id, {headers : this.userService.headers});
    }

    // editVehicle() {
    //     var user_id = window.localStorage.getItem('user_id');
        
    //     return this.http.get("http://localhost:4000/api/vehicle/" + user_id + "/edit");
        
    // }

    vehicleID(id){
      id = this.id
    }

    sendVehicleID(){
        return this.id
    }



    deleteVehicle(id)
    {
      return this.http.delete("http://localhost:4000/api/vehicle/" + id, {headers : this.userService.headers})
      .map(res => res.json());
    }

    editVehicle(id)
    {
      return this.http.get("http://localhost:4000/api/vehicle/" + id + "edit", {headers : this.userService.headers})
      .map(res => res.json());
    }
    // getUserid(id) {
    //     var user_id = window.localStorage.getItem('user_id');
    //     this.userID = user_id;
    // }




}
