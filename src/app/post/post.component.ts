import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {PostsService, Post} from "../posts.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy {
  subs : any;
  post: Post;

  constructor(
      public route: ActivatedRoute,
      public router: Router,
      public postsService: PostsService) { }

  ngOnInit(): void {
    // const postid = +this.route.snapshot.params.id;
    // this.post = this.postsService.getById(postid);
    this.subs = this.route.params.subscribe((params: any)=>{

      console.log('Params', params);
      this.post = this.postsService.getById(+params.id);
      // debugger;
    })
  }
  ngOnDestroy(): void{
    this.subs.unsubscribe();
  }
  loadPost(){
    this.router.navigate(['/posts', 44])
  }

}
