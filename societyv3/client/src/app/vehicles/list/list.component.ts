import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  vehicles = [];
  constructor(private vService : VehicleService) { }

  ngOnInit() {
  }
  
  allVehicles(){
    this.vService.getVehicles().subscribe((res)=>{
      this.vehicles = res.json();
    })
  }

}
