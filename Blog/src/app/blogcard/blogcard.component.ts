import { Token } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/post';
import jwtdecode from 'jwt-decode';
import { PostserviceService } from '../services/postservice.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-blogcard',
  templateUrl: './blogcard.component.html',
  styleUrls: ['./blogcard.component.css']
})
export class BlogcardComponent implements OnInit{
  // @Input() (binding property) makes CurrentPost (property of BlogcardComponent) available outside the component
  @Input() CurrentPost:Post|undefined;
  userMatch:boolean = false;
  token:any = localStorage.getItem('token');
  postUserId:string = '';
  currUserId:string = '';
  yesDelete:boolean = false;

  postDate:string ='';
  postMonth:string = '';
  postYear:string = '';

  postCreated:string = '';
  
  constructor(private postsvc:PostserviceService, private location:Location) {
    
  }

  GetUsernames() {
    // get post author's userId
    this.postUserId = this.CurrentPost!.userId;

    // check if a user is logged in
    if(this.token) {
      // user logged in; decode token and get current userId
      // TODO: should move to viewposts?
      this.token = jwtdecode(this.token);
      this.currUserId = this.token.data.authUserId;
      if(this.currUserId == this.postUserId) {
        this.userMatch = true;
      } else {
        this.userMatch = false;
      }
    } else {
      // console.log('nobody logged in');
      this.userMatch = false;
    }
    // if so, get username
    // see if username matches
  }

  DeletePost() {
    console.log("delete post confirmed");
    this.postsvc.DeletePost(this.CurrentPost!.postId).subscribe({
      next: (response) => {
        // console.log(response);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        window.location.reload();
      }
    });

  }

  ngOnInit(): void {
    this.GetUsernames();
    this.postCreated = new Date(this.CurrentPost!.createdDate).toDateString();
  }
  
}
