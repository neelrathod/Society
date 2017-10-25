import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private adminService : AdminService) { }
   users =[];
  ngOnInit() {
  }
   onUsers(){
     this.adminService.getUsers().subscribe((res)=>{
      // console.log(res)
      this.users= res.json()
     })
   }
}
