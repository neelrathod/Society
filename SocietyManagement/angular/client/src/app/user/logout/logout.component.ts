import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.onLogout()
  }



  onLogout(){
    
    localStorage.removeItem('user_id');
    localStorage.removeItem('adminAccess');
    localStorage.removeItem('emailToken');
    localStorage.removeItem('accesstoken');
    localStorage.removeItem('vehicleID');
    window.location.reload();
    this.router.navigate(['/'], { relativeTo: this.route })
  }
}
