import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserService } from "../../services/user.service";
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';

import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import { Http } from '@angular/http';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  file;
  accessDeniedUsers = ['Karan', 'Veer', 'Sajag'];
  form: FormGroup;


  constructor(private signupService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private http: Http,
    private el: ElementRef) { }

  ngOnInit() {

    this.form = new FormGroup({
      'first_name': new FormControl(null, [Validators.required, Validators.maxLength(50), this.accessDenied.bind(this)]),
      'last_name': new FormControl(null, [Validators.required, Validators.maxLength(50)]),

      'email': new FormControl(null, [Validators.required, Validators.email]),

      'password': new FormControl('', Validators.required),
      'cpassword': new FormControl('', [Validators.required]),


      'birth': new FormControl(),
      'purchase_date': new FormControl(),
      'profile_pic': new FormControl(),
      'checkbox': new FormControl(null, Validators.required),
      'flat_block': new FormControl(null, Validators.required),
      'flat_no': new FormControl(null, Validators.required),
      'mobile': new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(12)]),
    })
  };



  onAddUser() {


    let formData = new FormData();
    formData.append('forms', JSON.stringify(this.form.value));
    formData.append('img', this.file);

    console.log(formData.get("img"))

    this.signupService.addUser(formData).subscribe((res) => {
      console.log(res);
    })

    this.router.navigate(['/'], { relativeTo: this.route });
    this.form.reset();
  }


  upload(img) {

    this.file = img.srcElement.files.item(0);
  }


  //This usres can't login
  accessDenied(control: FormControl): { [s: string]: boolean } {
    if (this.accessDeniedUsers.indexOf(control.value) !== -1) {
      return { 'accessError': true }
    } else {
      return null;
    }
  }

  //Mobile no. takes only Numbers not a Characters
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }



}



