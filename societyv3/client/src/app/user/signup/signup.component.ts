import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { SignupService } from "../../services/signup.service";


import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {


  accessDeniedUsers = ['Karan', 'Veer', 'Sajag'];
  form: FormGroup;

  constructor(private signupService: SignupService, private router : Router, private route:ActivatedRoute) { }

  ngOnInit() {

    this.form = new FormGroup({
        'first_name': new FormControl(null, [Validators.required, Validators.maxLength(50), this.accessDenied.bind(this)]),
        'last_name': new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      
      'email': new FormControl(null, [Validators.required, Validators.email]),

      'password': new FormControl('', Validators.required),
      'cpassword' :  new FormControl('', Validators.required),
      

      'birth': new FormControl(),
      'purchase_date': new FormControl(),
      'profile_pic': new FormControl(),
      'checkbox': new FormControl(null, Validators.required),
      'flat_block': new FormControl(null, Validators.required),
      'flat_no': new FormControl(null, Validators.required),
      'mobile': new FormControl(null, [Validators.required, Validators.maxLength(12)]),
    })
  };

  onAddUser() {
    console.log(this.form.value);

    this.signupService.addUser(this.form.value).subscribe((response)=>{
      console.log(response);
    });

    this.router.navigate(['/'], { relativeTo: this.route})

  }




  passwordMatchValidator(g: FormGroup) {
    return g.get('pword').value === g.get('cpword').value
      ? null : { 'mismatch': true };
  }

  accessDenied(control: FormControl): { [s: string]: boolean } {
    if (this.accessDeniedUsers.indexOf(control.value) !== -1) {
      return { 'accessError': true }
    } else {
      return null;
    }
  }




}
