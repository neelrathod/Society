import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VehicleService } from '../../services/vehicle.service';
import { Router, ActivatedRoute, Params, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  editVehicleForm: FormGroup
  vehicleID: string

  constructor(private vService: VehicleService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }



  ngOnInit() {


    this.editVehicleForm = new FormGroup({
      'type': new FormControl(null, Validators.required),
      'reg': new FormControl(null, Validators.required),
      'pic': new FormControl(null, Validators.required),
      'color': new FormControl(null, Validators.required)
    });
    console.log(this.route.snapshot.params['id'])
    this.vehicleID = this.route.snapshot.params['id'];
    this.vService.getEditVehicleInfo(this.vehicleID).subscribe((res) => {

      var type = res.json().vehicle[0].type
      var reg = res.json().vehicle[0].reg
      var pic = res.json().vehicle[0].pic
      var color = res.json().vehicle[0].color
      console.log(type)
      this.editVehicleForm.setValue({
        'type': type,
        'reg': reg,
        'pic': pic,
        'color': color
      })
    })

  }

  onEditvehicle() {
    this.vService.editVehicle(this.vehicleID, this.editVehicleForm.value).subscribe((response) => {
      alert("Vehicle Edited Successfully")
      this.router.navigate(['/header/myvehicle/:id'], { relativeTo: this.route })
      }), (error) => {
      alert("Something Went Wrong")
    }

  }

  cancel() {
    this.router.navigate(['/header/myvehicle/:id'], { relativeTo: this.route });
  }

}
