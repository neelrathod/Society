import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { SearchService } from '../../services/search.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  results: Object;
  searchTerm$ = new Subject<string>();

  vehicles = [];
  constructor(private vService : VehicleService, private search :SearchService) { 

  }

  
  searchForm : FormGroup ;
  ngOnInit() {

    
    this.search.search(this.searchTerm$)
    .subscribe(results => {
      this.results = results.results;
    });

  }
  
  allVehicles(){
    this.vService.getVehicles().subscribe((res)=>{
      this.vehicles = res.json();
    })
  }

}
