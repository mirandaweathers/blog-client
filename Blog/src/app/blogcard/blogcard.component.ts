import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/post';

@Component({
  selector: 'app-blogcard',
  templateUrl: './blogcard.component.html',
  styleUrls: ['./blogcard.component.css']
})
export class BlogcardComponent implements OnInit{
  // @Input() (binding property) makes CurrentPost (property of BlogcardComponent) available outside the component
  @Input() CurrentPost:Post|undefined;
  
  constructor() {
    
  }
  ngOnInit(): void {
    
  }
  
}
