import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Post } from '../models/post';
import { PostserviceService } from '../services/postservice.service';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {
  constructor(private postSvc:PostserviceService, private titleSvc:Title, private router:Router) {
    // this.newPost = new Post('','','');
    this.titleSvc.setTitle('Create a Post');
  }

  newPost = {
    title: '',
    content: '',
    headerImage: ''
  };
  
  newPostFormGroup = new FormGroup ({
    formTitle: new FormControl('', [Validators.required]),
    formImg: new FormControl(''),
    formContent: new FormControl('', [Validators.required])
  });

  // server-side error flag
  serverError:boolean = false;
  serverErrMsg:string = '';
  
  CreatePost() {
    let token = localStorage.getItem('token');
    if(token) {
      if(this.newPostFormGroup.controls.formTitle.value && this.newPostFormGroup.controls.formContent.value) {
        this.newPost.title = this.newPostFormGroup.controls.formTitle.value
        this.newPost.content = this.newPostFormGroup.controls.formContent.value
        this.newPost.headerImage = this.newPostFormGroup.controls.formImg.value || 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png';
    
        // console.log("from controller: ");
        // console.log(token);
        // console.log(this.newPost);
        this.postSvc.CreatePost(this.newPost.title, this.newPost.content, this.newPost.headerImage).subscribe({
          next: (response) => {

          },
          error: (err) => {
             // get server error message to display to user
          this.serverError = true;
                    
          switch(err.error.status) {
            case '401':
              this.serverErrMsg = 'You are unauthorized to create a post. Please log in.';
              break;
            case '406':
              this.serverErrMsg = 'Post title and/or content is missing.';
              break;
            default:
              this.serverErrMsg = 'There was a problem creating your post. Please try again!';
          }
          },
          complete: () => {
            if(!this.serverError){
              this.router.navigate(['/']);
            }
          }
        });
      } else {
        console.log('invalid');
      }
    } else {
      console.log('unauthorized');
    }
    
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  ClearForm() {
    this.newPostFormGroup.reset();
  }
  
}
