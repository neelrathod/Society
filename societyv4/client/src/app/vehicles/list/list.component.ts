import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  vehicles = [];
  constructor(private vService : VehicleService) { }
  searchForm : FormGroup ;
  ngOnInit() {
  this.searchForm = new FormGroup({
    'q' : new FormControl()
  })
  }
  
  allVehicles(){
    this.vService.getVehicles().subscribe((res)=>{
      this.vehicles = res.json();
    })
  }

}
