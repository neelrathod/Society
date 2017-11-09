import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { UserService } from './user.service';
import { AdminService } from './admin.service';

@Injectable()
export class FeedService {
    id;

    constructor(private http: Http, private adminService: AdminService) { }

    addFeed(newFeed: any) {
        return this.http.post("http://localhost:4000/api/addFeed", newFeed, { headers: this.adminService.headers });
    }
    
    listFeeds() {
        return this.http.get("http://localhost:4000/api/feeds", { headers: this.adminService.headers });
    }

    addComment(newComment : any){
       return this.http.post("http://localhost:4000/api/addComment", newComment, { headers: this.adminService.headers });
    }
}
