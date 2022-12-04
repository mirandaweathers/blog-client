import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Post } from '../models/post';
import { PostserviceService } from '../services/postservice.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import jwtdecode from 'jwt-decode';
import {Location} from '@angular/common';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.css']
})
export class EditpostComponent implements OnInit {
  constructor(
    private postSvc:PostserviceService, 
    private titleSvc:Title, 
    private route:ActivatedRoute,
    private location:Location,
    private router:Router
  ) {
    this.titleSvc.setTitle('Edit Post');
  }

  urlId:string|null = '';

  userMatch:boolean = false;
  token:any = localStorage.getItem('token');
  // postUserId:string = '';
  currUserId:string = '';

  editedPost:Post|undefined;
  
  editedPostFormGroup = new FormGroup ({
    formTitle: new FormControl('', [Validators.required]),
    formImg: new FormControl(''),
    formContent: new FormControl('', [Validators.required])
  });

  ngOnInit(): void {
    
    // get post ID from route
    this.route.queryParams.subscribe(params => {
      this.urlId = this.route.snapshot.paramMap.get('id');
    });

    // ensure user is logged in
    if(this.token) {
      // console.log("logged in");
      this.token = jwtdecode(this.token);
      this.currUserId = this.token.data.authUserId;
      // console.log("logged in user: " + this.currUserId);

      // retrieve post information
      this.postSvc.GetPost(this.urlId!).subscribe({
        next: (post) => {
          this.editedPost = JSON.parse(JSON.stringify(post));
          // console.log(this.editedPost);
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          // compare logged in user with post userId
          if(this.currUserId == this.editedPost?.userId) {
            this.userMatch = true;
          } else {
            this.userMatch = false;
          }
          // console.log("usernames match: " + this.userMatch);
        }
      });
      
    } else {
      this.userMatch = false;
      console.log("not logged in");
    }
  }

  EditPost() {
    let token = localStorage.getItem('token');
    if(token) {
      // console.log('logged in');
      if(this.editedPost && this.editedPostFormGroup.controls.formTitle.value && this.editedPostFormGroup.controls.formContent.value) {
        this.editedPost.title = this.editedPostFormGroup.controls.formTitle.value
        this.editedPost.content = this.editedPostFormGroup.controls.formContent.value
        this.editedPost.headerImage = this.editedPostFormGroup.controls.formImg.value || 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png';
        
        // console.log("from edit post controller: ");
        // console.log(token);
        // console.log(this.editedPost);
        this.postSvc.EditPost(this.editedPost.postId, this.editedPost.title, this.editedPost.content, this.editedPost.headerImage).subscribe({
          next: (response) => {
            // console.log(response);
          },
          error: (err) => {
            console.log(err);
          },
          complete: () => {
            this.router.navigate(['/']);
          }
        });
      } else {
        console.log('invalid');
      }
    } else {
      // console.log('not logged in');
    }
  }

  ClearForm() {
    this.editedPostFormGroup.reset();
  }

  GoBack() {
    this.location.back();
  }
}
