import { Component, OnInit } from '@angular/core';
import {PostsService} from "../posts.service";


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  showIds = false;

  constructor(
      public postsService: PostsService

  ) {

  }

  ngOnInit(): void {

  }
  showId(){
    this.showIds = !this.showIds;
  }

  showIdProgram(){
    this.showIds = !this.showIds;
  }

}
