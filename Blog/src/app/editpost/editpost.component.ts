import { Component } from '@angular/core';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.css']
})
export class EditpostComponent {
  editPost = {
    title: '',
    content: '',
    headerImage: ''
  }
}
