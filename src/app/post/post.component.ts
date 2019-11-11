import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postDate: Date;
  @Input() index: number;
  @Input() postId: number;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  likePost() {
    this.postService.likePost(this.postId);
    //this.postLoveIts = this.postLoveIts + 1;
  }

  dislikePost() {
    this.postService.dislikePost(this.postId);
    //this.postLoveIts = this.postLoveIts - 1;
  }

  deletePost() {
    this.postService.deletePost(this.postId);
  }
}
