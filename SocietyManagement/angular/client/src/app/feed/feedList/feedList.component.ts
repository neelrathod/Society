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
  feedDataForm: FormGroup;
  feedID: string
  submitClicked = false;

  constructor(private feedService: FeedService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {


    this.feedDataForm = new FormGroup({
      'comment': new FormControl(null, Validators.required)
    })

    this.allFeeds()

  }


  allFeeds() {
    this.feedService.listFeeds().subscribe((res) => {
      this.feeds = res.json();
      console.log(this.feeds)
    })
  }

  onComment(id) {
    console.log(id)
    this.feedService.addComment(this.feedDataForm.value, id).subscribe((res) => {
      this.feedDataForm.reset()
      this.allFeeds()
    }), (error) => {
      alert("Something Went Wrong")
    }
  }

  onLike(id) {
    this.feedService.addLike(id).subscribe((res) => {
      console.log("Like added")
      console.log(id)
      this.submitClicked = true;
      this.allFeeds()

    }), (error) => {
      alert("Something Went Wrong")

    }
  }


}
