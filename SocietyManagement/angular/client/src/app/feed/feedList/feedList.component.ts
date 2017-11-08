import { Component, OnInit } from '@angular/core';
import { FeedService } from '../../services/feed.service';

@Component({
  selector: 'app-feedList',
  templateUrl: './feedList.component.html',
  styleUrls: ['./feedList.component.css']
})
export class FeedListComponent implements OnInit {

  feeds = [];
  
  constructor(private feedService : FeedService) { }

  ngOnInit() {
    this.allFeeds()
  }


  allFeeds() {
    this.feedService.listFeeds().subscribe((res) => {
      this.feeds = res.json();
    })
  }
}
