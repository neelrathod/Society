import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VehicleService } from '../../services/vehicle.service';
import { Router, ActivatedRoute, ActivatedRouteSnapshot, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {


  editVehicleForm: FormGroup

  constructor(private vService: VehicleService,
    private router: Router,
    private route: ActivatedRoute,
    private snapshot: ActivatedRouteSnapshot) { }

  ngOnInit() {

    this.snapshot.params.subscribe((params: Params) => {

    })

    this.editVehicleForm = new FormGroup({
      'type': new FormControl(null, Validators.required),
      'reg': new FormControl(null, Validators.required),
      'pic': new FormControl(),
      'color': new FormControl(null, Validators.required)
    });






  }

  onEditvehicle() {
    this.vService.editVehicle(this.editVehicleForm.value).subscribe((response) => {
      console.log(this.vService.sendVehicleID())
      alert("Vehicle Edited Successfully")
    }), (error) => {
      alert("Something Went Wrong")
    }
  }

  cancel() {
    this.router.navigate(['/header/myvehicle/'], { relativeTo: this.route });

  }

}
