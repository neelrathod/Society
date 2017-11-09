import { Component, OnInit } from '@angular/core';
import { FeedService } from '../../services/feed.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-feedList',
  templateUrl: './feedList.component.html',
  styleUrls: ['./feedList.component.css']
})
export class FeedListComponent implements OnInit {

  feeds = [];
  feedDataForm : FormGroup
  feedID: string
  
  constructor(private feedService : FeedService, private router: Router, private route : ActivatedRoute) { }

  ngOnInit() {
    
    this.allFeeds()
    this.feedDataForm = new FormGroup({
      'comment': new FormControl(null, Validators.required)
    })
  }

   
  allFeeds() {
    this.feedService.listFeeds().subscribe((res) => {
      this.feeds = res.json();
    })
  }

  onComment(id){
      console.log(id)
      this.feedService.addComment(this.feedDataForm.value,id).subscribe((res)=>{
        alert("Comment Added Successfully")
        this.feedDataForm.reset()
        
        // this.router.navigate(['/header/feed/list'], { relativeTo: this.route });
        
      }), (error) => {
        alert("Something Went Wrong")
      } 
    }
  
}
