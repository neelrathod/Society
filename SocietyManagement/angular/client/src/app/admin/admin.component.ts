import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private adminService: AdminService) { }
  unpaidUsers = [{}];
  PaidUsers = [{}];
  adminForm: FormGroup;



  ngOnInit() {
    this.adminForm = new FormGroup({
      'month': new FormControl(8),
      'flat_block': new FormControl("A")

    })
  }
  onUnpaid() {
    this.adminService.getUnpaid(this.adminForm.value).subscribe((res) => {
      // console.log(res)
      this.unpaidUsers = res.json().data
    })
  }

  onpaid() {
    this.adminService.getpaid(this.adminForm.value).subscribe((res) => {
      this.PaidUsers = res.json().data
    })
  }
}
