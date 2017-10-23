import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { Observable } from 'rxjs/Observable';


import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  accessDeniedUsers = ['Karan','Veer','Sajag'];
  genders = ['male', 'female']
  form : FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      'names' : new FormGroup({
        'firstname' : new FormControl (null, [Validators.required, Validators.maxLength(50), this.accessDenied.bind(this)]),
        'lastname' : new FormControl(null,[Validators.required, Validators.maxLength(50)])
      }),
      'email': new FormControl (null, [Validators.required, Validators.email], this.deniedEmail),

      'password' : new FormGroup({
        'pword': new FormControl ('', Validators.required),
        'cpword': new FormControl ('', Validators.required),
      }, this.passwordMatchValidator),
     
      'birth' : new FormControl (),
      'purchase_date' : new FormControl (),
      'profile_pic': new FormControl (),
      'checkbox' : new FormControl(),
      'flat_block': new FormControl (null, Validators.required),
      'flat_no' : new FormControl (null, Validators.required),
      'mobile': new FormControl (null, [Validators.required, Validators.maxLength(12)]),
    })
  };

  constructor() { }
  onSubmit(){
    console.log(this.form);
  }
 
  passwordMatchValidator(g: FormGroup) {
    return g.get('pword').value === g.get('cpword').value
       ? null : {'mismatch': true};
 }

  accessDenied(control : FormControl):{ [s: string] : boolean}{
    if(this.accessDeniedUsers.indexOf(control.value)!== -1){
      return {'accessError': true}
    }else{
    return null;  
    }
  }

  
  deniedEmail(control : FormControl): Promise<any> | Observable<any>{
      const proimise = new Promise<any>((resolve, reject)=>{
        setTimeout(()=>{
          if(control.value === 'abc@gmail.com'){
            resolve({ 'deniedEmailerror' : true})
          }else{
            resolve(null);
          }
        }, 1500);
      })
      return proimise;
  }



}
