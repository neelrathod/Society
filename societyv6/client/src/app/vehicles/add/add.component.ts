import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  
  addvehicleForm : FormGroup
  
  constructor(private vService:VehicleService) { }
   
  ngOnInit() {
  this.addvehicleForm = new FormGroup({
    'type' : new FormControl(null, Validators.required),
    'reg' : new FormControl(null, Validators.required),
    'pic'  : new FormControl(),
    'color' : new FormControl(null, Validators.required)
  })
  }

  onAddvehicle(){
    this.vService.addVehicle(this.addvehicleForm.value).subscribe((response)=>{
      console.log(response.json());
    })
  }

}
