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
  userToken;

  constructor(private service: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loginform = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required)

    })
  }



  onLogin() {
    this.service.login(this.loginform.value).subscribe((res) => {
      var userid = res.json().data._id;
      var emailToken = res.json().data.emailToken;
      var adminAccess = res.json().data.adminAccess;
      console.log(adminAccess);
      console.log(emailToken);
      console.log(userid)
      localStorage.setItem('emailToken', emailToken);
      localStorage.setItem('user_id',userid);
      localStorage.setItem('adminAccess', adminAccess);
      this.service.getUserid(res.json().data._id);
      this.userToken=res.json().data.emailToken;
      if (res.status) {
        this.setAccessToken() 
        
        this.router.navigate(['/header'], { relativeTo: this.route })
      } else {
        this.router.navigate(['/'], { relativeTo: this.route })
      }
    });


  }
  setAccessToken(){
    window.localStorage.setItem('accessToken', this.userToken)
  }
}
