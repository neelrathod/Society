import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private adminService : AdminService) { }
   unpaidUsers =[];
   paidUsers = [];
  ngOnInit() {
  }
  onUnpaid(){
     this.adminService.getUnpaid().subscribe((res)=>{
      // console.log(res)
      this.unpaidUsers= res.json()
     })
   }

   onPaid(){
     this.adminService.getPaid().subscribe((res)=>{
       this.paidUsers = res.json()
     })
   }
}
