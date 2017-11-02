import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VehicleService } from '../../services/vehicle.service';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  file;
  addvehicleForm: FormGroup

  constructor(private vService: VehicleService) { }

  ngOnInit() {

    var userid = localStorage.getItem('user_id');
    console.log(userid);
    this.addvehicleForm = new FormGroup({
      'userId': new FormControl(userid),
      'type': new FormControl(null, Validators.required),
      'reg': new FormControl(null, Validators.required),
      'pic': new FormControl(),
      'color': new FormControl(null, Validators.required)
    })
  }

  onAddvehicle() {
    let formData = new FormData();
    formData.append('addvehicleForm', JSON.stringify(this.addvehicleForm.value));
    formData.append('vehicleimg', this.file);



    this.vService.addVehicle(formData).subscribe((response) => {
      // console.log(response.json().data)
      this.addvehicleForm.reset()
      alert("Vehicle added Successfully")
    }), (error) => {
      alert("Something Went Wrong")
    }
  }
  // onAddUser() {


  //       let formData = new FormData();
  //       formData.append('forms', JSON.stringify(this.form.value));
  //       formData.append('img', this.file);

  //       console.log(formData.get("img"))

  //       this.signupService.addUser(formData).subscribe((res) => {
  //         console.log(res);
  //       })

  //       this.router.navigate(['/'], { relativeTo: this.route });
  //       this.form.reset();
  //     }

  uploadvehicle(vehicleimg) {
    this.file = vehicleimg.srcElement.files.item(0);
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

}
