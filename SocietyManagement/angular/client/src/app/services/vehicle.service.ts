import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { UserService } from './user.service';
import { AdminService } from './admin.service';

@Injectable()
export class VehicleService {
    id;

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

    // Edit Vehicle
    editVehicle(id, data) {
        return this.http.put("http://localhost:4000/api/vehicle/edit/" + id, data, { headers: this.adminService.headers })

    }

    getEditVehicleInfo(id) {
        return this.http.get("http://localhost:4000/api/vehicle/editdata/" + id, { headers: this.adminService.headers })
    }

}
