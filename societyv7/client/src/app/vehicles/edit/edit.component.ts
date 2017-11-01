import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  editVehicleForm: FormGroup
  
  constructor(private vService: VehicleService) { }
  
  ngOnInit() {
    var userid = localStorage.getItem('user_id');
    this.editVehicleForm = new FormGroup({
      'userId': new FormControl(userid),
      'type': new FormControl(null, Validators.required),
      'reg': new FormControl(null, Validators.required),
      'pic': new FormControl(),
      'color': new FormControl(null, Validators.required)
    })
  }

  // onEditvehicle() {
  //   this.vService.editVehicle(this.editVehicleForm.value).subscribe((response) => {
  //     console.log(response.json())
  //     alert("Vehicle added Successfully")
  //   }), (error)=>{
  //     alert("Something Went Wrong")
  //   }
  // }

}
