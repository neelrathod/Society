import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-myvehicle',
  templateUrl: './myvehicle.component.html',
  styleUrls: ['./myvehicle.component.css']
})
export class MyvehicleComponent implements OnInit {
  vehicles = []
  constructor(private vService : VehicleService) { }

  ngOnInit() {
  }

  myVehicle(){
    this.vService.getVehicles().subscribe((res)=>{
      this.vehicles = res.json();
    })
  }
}
