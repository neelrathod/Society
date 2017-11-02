import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { UserService } from './user.service';
import { AdminService } from './admin.service';

@Injectable()
export class VehicleService {
    id = ""
    userID = ""

    constructor(private http: Http, private adminService: AdminService) { }





    getVehicles() {
        return this.http.get("http://localhost:4000/api/vehicles", { headers: this.adminService.headers });
    }


    myVehicle() {
        var user_id = window.localStorage.getItem('user_id');
        console.log(user_id);
        return this.http.get("http://localhost:4000/api/vehicle/" + user_id, { headers: this.adminService.headers });
    }

    addVehicle(newVehicle: any) {
        return this.http.post("http://localhost:4000/api/vehicle", newVehicle, { headers: this.adminService.headers });
    }


    deleteVehicle(id) {
        return this.http.delete("http://localhost:4000/api/vehicle/" + id, { headers: this.adminService.headers })
            .map(res => res.json());
    }

    editVehicle(data) {

        console.log(data);
        var id = this.sendVehicleID() 
        console.log(this.vehicleID(id))
        
        return this.http.put("http://localhost:4000/api/vehicle/edit", data, { headers: this.adminService.headers })
            .map(res => res.json());
    }


    getVehiclebyid(id) {
        return this.http.get("http://localhost:4000/api/vehicle/" + id, { headers: this.adminService.headers })
        .map(res => res.json());
    }

    vehicleID(id) {
        id = this.id
    }


    sendVehicleID() {
        return this.id
    }

}
