import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {
  allPosts:Post[];
  
  constructor(private httpClient:HttpClient) { 
    this.allPosts = [];

    // this.allPosts.push(new Post(
    //   'test title', 
    //   'test content', 
    //   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW0l9NzeXeZiUsCyOxj5GYdrXRW6wCbMlK9W1SRkV-_Q&s'
    // ));

    // this.allPosts.push(new Post(
    //   'overwhelmed hoarder with cats', 
    //   'So I found this very therapeutic and I thought some people might as well. I have an app called Picsart. I’m sure there are other similar ones. If you don’t want to pay you can do a free trial. They now have AI Photos. You basically put in a bunch of words that mean something to you, anything you want, and it will create an image. I put in a whole bunch about my mother, cat hoarding, clutter, feeling disorganized, anxiety, trauma etc. And this is one of the images the app gave me. You could also certainly do it with positive things such as a dream you had or associations with other aspects of life, positive or negative. But I feel like it kind of created a picture of that describes my feelings about my childhood.', 
    //   'https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/315656647_10226448588418346_7354698050852210663_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=YGrEOMIa3hQAX9_qVoj&tn=Pz2xWcn70yM1uYDq&_nc_ht=scontent-mia3-1.xx&oh=00_AfDdBmVDzz6W3GbuQHZbBFpANErsyYhNyrDny4GMqGRqkw&oe=637D9DFF'
    // ));

    // this.allPosts.push(new Post(
    //   '2 overwhelmed hoarder with cats', 
    //   '2 So I found this very therapeutic and I thought some people might as well. I have an app called Picsart. I’m sure there are other similar ones. If you don’t want to pay you can do a free trial. They now have AI Photos. You basically put in a bunch of words that mean something to you, anything you want, and it will create an image. I put in a whole bunch about my mother, cat hoarding, clutter, feeling disorganized, anxiety, trauma etc. And this is one of the images the app gave me. You could also certainly do it with positive things such as a dream you had or associations with other aspects of life, positive or negative. But I feel like it kind of created a picture of that describes my feelings about my childhood.', 
    //   'https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/315656647_10226448588418346_7354698050852210663_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=YGrEOMIa3hQAX9_qVoj&tn=Pz2xWcn70yM1uYDq&_nc_ht=scontent-mia3-1.xx&oh=00_AfDdBmVDzz6W3GbuQHZbBFpANErsyYhNyrDny4GMqGRqkw&oe=637D9DFF'
    // )); 
  }

  GetPosts() {
    // retrieve from backend
    // 
    return this.httpClient.get(
      `${environment.serverEndpoint}/Posts/`
    );
  }

  CreatePost(title:string, content:string, headerImg:string) {
    let token = JSON.parse(localStorage.getItem('token')!);
    
    // console.log("from service: " + title + ", " + content + ", " + headerImg);
    // console.log(token);
    return this.httpClient.post(
      `${environment.serverEndpoint}/Posts/`,
      {
        "title": title,
        "content": content,
        "headerImage": headerImg
      },
      {
        headers: {
          Authorization: `Bearer ${token.token}`
        }
      }
    );
  }

  GetPost(postId:string|number) {
    // search array for post id
    // etc
    return this.httpClient.get(`${environment.serverEndpoint}/Posts/${postId}`);
  }

  EditPost(id:number|string, title:string, content:string, headerImg:string) {
    let token = JSON.parse(localStorage.getItem('token')!);
    let editedPostId = id;
    
    // console.log("from service: " + title + ", " + content + ", " + headerImg);
    // console.log(token);
    return this.httpClient.patch(
      `${environment.serverEndpoint}/Posts/${editedPostId}`,
      {
        "title": title,
        "content": content,
        "headerImage": headerImg
      },
      {
        headers: {
          Authorization: `Bearer ${token.token}`
        }
      }
    );
  }

  DeletePost(id:number|string) {
    let token = JSON.parse(localStorage.getItem('token')!);
    return this.httpClient.delete(
      `${environment.serverEndpoint}/Posts/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token.token}`
        }
      }
    );
  }
}
