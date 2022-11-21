import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Post } from '../models/post';
import { PostserviceService } from '../services/postservice.service';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {
  newPost:Post;

  constructor(private postSvc:PostserviceService, private titleSvc:Title) {
    this.newPost = new Post('','','');
    this.titleSvc.setTitle('Create a Post');
  }

  CreatePost() {
    this.postSvc.CreatePost(this.newPost);
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  
}
