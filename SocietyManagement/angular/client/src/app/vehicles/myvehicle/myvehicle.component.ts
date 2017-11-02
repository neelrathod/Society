import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-myvehicle',
  templateUrl: './myvehicle.component.html',
  styleUrls: ['./myvehicle.component.css']
})
export class MyvehicleComponent implements OnInit {
  vehicles = [];

  myVehicleID() {
    this.userService.getUserid
  }
  constructor(private vService: VehicleService,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService) { }

  ngOnInit() {
  }

  myVehicle() {
    this.vService.myVehicle().subscribe((res) => {
      this.vehicles = res.json().vehicle;
      console.log(this.vehicles);
    });
  }

  onEditVehicle(id) {
    this.router.navigate(['/header/edit/', id], { relativeTo: this.route });
  }

  onDeleteVehicle(id: any) {
    var vehicles = this.vehicles;
    this.vService.deleteVehicle(id)
      .subscribe(data => {
        if (data.n === 1) {
          for (var i = 0; i < vehicles.length; i++) {
            if (vehicles[i]._id == id) {
              vehicles.splice(i, 1);
            }
          }
        }
      })
  }
}
