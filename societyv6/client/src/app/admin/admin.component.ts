import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private adminService : AdminService) { }
   unpaidUsers =[{}];
   PaidUsers = [{}];
   adminForm : FormGroup;

   

  ngOnInit() {
  this.adminForm = new FormGroup({
    'month' : new FormControl(),
    'flat_block' : new FormControl()
    
  })
  }
  onUnpaid(){
     this.adminService.getUnpaid(this.adminForm.value).subscribe((res)=>{
      // console.log(res)
      this.unpaidUsers= res.json()
     })
   }

   onpaid(){
     this.adminService.getpaid(this.adminForm.value).subscribe((res)=>{
       this.PaidUsers = res.json()
     })
   }
}
