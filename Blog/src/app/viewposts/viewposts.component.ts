import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostserviceService } from '../services/postservice.service';

@Component({
  selector: 'app-viewposts',
  templateUrl: './viewposts.component.html',
  styleUrls: ['./viewposts.component.css']
})
export class ViewpostsComponent implements OnInit {
  allPosts:Post[];

  constructor(private postSvc:PostserviceService) {
    this.allPosts = this.postSvc.GetPosts();
  }

  ngOnInit(): void {
    this.allPosts = this.postSvc.GetPosts();
  }


}
