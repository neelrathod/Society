import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-myvehicle',
  templateUrl: './myvehicle.component.html',
  styleUrls: ['./myvehicle.component.css']
})
export class MyvehicleComponent implements OnInit {
  vehicles = []

  myVehicleID(){
    this.userService.getUserid
  }
  constructor(private vService : VehicleService, private userService : UserService) { }

  ngOnInit() {
  }

  myVehicle(id){
    this.vService.getVehicles().subscribe((res)=>{
      this.vehicles = res.json();
    })
  }
}
