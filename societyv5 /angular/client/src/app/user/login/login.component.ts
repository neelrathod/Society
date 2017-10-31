import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;

  constructor(private service:UserService, private router : Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.loginform = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required)

    })
  }
  


  onLogin(){
    this.service.login(this.loginform.value).subscribe((res)=>{
      console.log(res.json().data._id);
      this.service.getUserid(res.json().data._id);
      if(res.status){
        this.service.setToken()
        this.router.navigate(['/header'], { relativeTo: this.route})
      }else{
        (error)=>{
            alert("Email or Password went wrong");
        }
        
      }
    });

    
  }
}
