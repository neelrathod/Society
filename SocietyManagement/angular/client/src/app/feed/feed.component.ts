import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FeedService } from '../services/feed.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  file;
  feeds = [];

  feedForm: FormGroup

  constructor(private router: Router, private route: ActivatedRoute, private feedService: FeedService) { }

  ngOnInit() {
    var userId = localStorage.getItem('user_id');
    console.log(userId + "  From Feed")
    this.feedForm = new FormGroup({
      'userId': new FormControl(userId),
      'feed': new FormControl(null, Validators.required),
      'feedImg': new FormControl(null)
    })
  }

  onPost() {
    let formData = new FormData();
    formData.append('feedForm', JSON.stringify(this.feedForm.value));
    formData.append('feedImg', this.file);
    
    this.feedService.addFeed(formData).subscribe((res) => {
      this.feedForm.reset()
      alert("Feed Added Successfully")
      this.router.navigate(['/header/feed/list'], { relativeTo: this.route });

    }), (error) => {
      alert("Something Went Wrong")
    }
  }


  uploadFeed(feedImg) {
    this.file = feedImg.srcElement.files.item(0);
  }

  allFeeds() {
    this.feedService.listFeeds().subscribe((res) => {
      this.feeds = res.json();
    })
  }
}
