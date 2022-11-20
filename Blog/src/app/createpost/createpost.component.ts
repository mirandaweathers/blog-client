import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {
  newPost:Post;

  constructor() {
    this.newPost = new Post('','','');
  }

  CreatePost() {
    console.log(this.newPost);
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  
}
