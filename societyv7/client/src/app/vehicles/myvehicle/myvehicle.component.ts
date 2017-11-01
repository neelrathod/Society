import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-myvehicle',
  templateUrl: './myvehicle.component.html',
  styleUrls: ['./myvehicle.component.css']
})
export class MyvehicleComponent implements OnInit {
  vehicles = [];

  myVehicleID() {
    this.userService.getUserid
  }
  constructor(private vService: VehicleService, private userService: UserService) { }

  ngOnInit() {
  }

  myVehicle() {
    this.vService.myVehicle().subscribe((res) => {
      this.vehicles = res.json().vehicle;
      console.log(this.vehicles);
    });
  }

  onEditVehicle(id: any){
    var vehicles = this.vehicles;
    this.vService.editVehicle(id)
    .subscribe(data=>{
     console.log(data)
    })
  }

  onDeleteVehicle(id: any){
    var vehicles = this.vehicles;
    this.vService.deleteVehicle(id)
    .subscribe(data=>{
      if(data.n === 1){
         for(var i=0; i<vehicles.length; i++ ){
           if(vehicles[i]._id == id){
            vehicles.splice(i,1);
           }
         }
      }
    })
  }
}
