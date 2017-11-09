import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VehicleService } from '../../services/vehicle.service';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  file;
  addvehicleForm: FormGroup

  constructor(private vService: VehicleService,
              private router: Router,
            private route : ActivatedRoute) { }

  ngOnInit() {

    var userid = localStorage.getItem('user_id');
    console.log(userid);
    this.addvehicleForm = new FormGroup({
      'userId': new FormControl(userid),
      'type': new FormControl(null, Validators.required),
      'reg': new FormControl(null, Validators.required),
      'pic': new FormControl(null),
      'color': new FormControl(null, Validators.required)
    })
  }

  onAddvehicle() {
    let formData = new FormData();
    formData.append('addvehicleForm', JSON.stringify(this.addvehicleForm.value));
    formData.append('vehicleimg', this.file);



    this.vService.addVehicle(formData).subscribe((response) => {
      this.addvehicleForm.reset()
      alert("Vehicle added Successfully")
      this.router.navigate(['/header/myvehicle/:id'], { relativeTo: this.route })
    }), (error) => {
      alert("Something Went Wrong")
    }
  }

  uploadvehicle(vehicleimg) {
    this.file = vehicleimg.srcElement.files.item(0);
  }
  onCancel(){
    var result = confirm("Don't want to add vehicle  ?")
    if(result){
      this.router.navigate(['/header/myvehicle/:id'], { relativeTo: this.route })
    }
  }

}
