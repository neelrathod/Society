import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { SignupService } from '../../services/signup.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;

  constructor(private service:SignupService, private router : Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.loginform = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required)

    })
  }

  onLogin(){
    this.service.login(this.loginform.value).subscribe((res)=>{
      console.log(res);
    });

    this.router.navigate(['/header'], { relativeTo: this.route})
  }
}
