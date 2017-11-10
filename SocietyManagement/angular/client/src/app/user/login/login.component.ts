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
      'password': new FormControl('', Validators.required)

    })
  }



  onLogin() {
    this.service.login(this.loginform.value).subscribe((res) => {
      var userid = res.json().data._id;
      var adminAccess = res.json().data.adminAccess;
      console.log(adminAccess)
      console.log(userid)

      window.localStorage.setItem('user_id', userid);
      window.localStorage.setItem('adminAccess', adminAccess);
      this.userToken = res.json().data.emailToken;
      if (res.status == 200) {
        this.setAccessToken();

        this.router.navigate(['/header'], { relativeTo: this.route })
      } else {
        this.router.navigate(['/'], { relativeTo: this.route })
      }
    });


  }
  setAccessToken() {
    window.localStorage.setItem('accesstoken', this.userToken)
  }
}
