import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onLogout() {
    localStorage.removeItem('user_id');
    localStorage.removeItem('adminAccess');
    localStorage.removeItem('emailToken');
    localStorage.removeItem('accesstoken');
    this.router.navigate(['/'], { relativeTo: this.route })
  }
}
