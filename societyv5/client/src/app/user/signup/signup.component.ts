import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserService } from "../../services/user.service";
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';

import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
//import the do function to be used with the http library.
import "rxjs/add/operator/do";
//import the map function to be used with the http library
import "rxjs/add/operator/map";
import { Http } from '@angular/http';
const URL = 'http://localhost:4000/api/uploads';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  // http: any;

  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'photo' });

  accessDeniedUsers = ['Karan', 'Veer', 'Sajag'];
  form: FormGroup;

  constructor(private signupService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private http: Http,
    private el: ElementRef) { }

  ngOnInit() {

    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };

    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log("ImageUpload:uploaded:", item, status, response);
    };

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

  //Mobile no. takes only Numbers not a Characters
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }


  onAddUser() {
    console.log(this.form.value);


    this.signupService.addUser(this.form.value).subscribe((response) => {
      console.log(response);
    });

    this.router.navigate(['/'], { relativeTo: this.route })
    this.form.reset();
  }


  upload(img) {
    console.log(img.srcElement.files)
    let formData = new FormData();
    formData.append('photo', img.srcElement.files);
    formData.append('formValue',JSON.stringify(this.form.value))
    this.http.post(URL, formData).subscribe((success) => {
       alert(success);
    },
      (error) => alert(error))



  }

  // upload() {
  //   let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#photo');
  //   let fileCount: number = inputEl.files.length;
  //   let formData = new FormData();
  //   if (fileCount > 0) {
  //     formData.append('photo', inputEl.files.item(0));
  //     this.http.post(URL, formData).subscribe((success) => {
  //       alert();
  //     },
  //       (error) => alert(error))
  //   }
  // }



  accessDenied(control: FormControl): { [s: string]: boolean } {
    if (this.accessDeniedUsers.indexOf(control.value) !== -1) {
      return { 'accessError': true }
    } else {
      return null;
    }
  }



}



