import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FeedService } from '../services/feed.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  feeds = [];
  
  feedForm : FormGroup 

  constructor(private router : Router, private route: ActivatedRoute,private feedService : FeedService) { }

  ngOnInit() {
    var userId = localStorage.getItem('user_id');
    console.log(userId + "  From Feed")
    this.feedForm = new FormGroup({
      'userId': new FormControl(userId),
      'feed' : new FormControl(null, Validators.required),
      'feedImg' : new FormControl(null, Validators.required)
    })
  }

  onPost(){
    this.feedService.addFeed(this.feedForm.value).subscribe((res)=>{
      this.feedForm.reset()
      alert("Feed Added Successfully")
      this.router.navigate(['/header/feed/list'], { relativeTo: this.route });
      
    }), (error) => {
      alert("Something Went Wrong")
    } 
  }

  allFeeds(){
    this.feedService.listFeeds().subscribe((res) => {
      this.feeds = res.json();
    })
  }
}
