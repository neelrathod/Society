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
    // this.feedID = this.route.snapshot.params['id'];
    // console.log(this.feedID+"Feedid")
    this.feedDataForm = new FormGroup({
      'comment': new FormControl(null, Validators.required)
    })
  }

   
  allFeeds() {
    this.feedService.listFeeds().subscribe((res) => {
      this.feeds = res.json();
    })
  }

  onComment(){
  
      this.feedService.addComment(this.feedDataForm.value).subscribe((res)=>{
        this.feedDataForm.reset()
        alert("Comment Added Successfully")
        // this.router.navigate(['/header/feed/list'], { relativeTo: this.route });
        
      }), (error) => {
        alert("Something Went Wrong")
      } 
    }
  
}
