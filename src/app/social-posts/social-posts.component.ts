import { Component, OnInit } from '@angular/core';
import {Post} from"../interface/post";

@Component({
  selector: 'social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent {
  // show boolean=false; 

  posts:Post[]= [
    {
      title:"this is a title",
      thought: "this is a thought."
    },
    {
      title:"this is a title2",
      thought: "this is a thought2."
    },
    {
      title:"this is a title3",
      thought: "this is a thought3."
    },
    {
      title:"this is a title4",
      thought: "this is a thought4."
    },
    {
      title:"this is a title5",
      thought: "this is a thought5."
    }
  ];
  deletePost(index: number):void{
    this.posts.splice(index,1);
  }
  constructor() { }

  ngOnInit() {
  }

}
