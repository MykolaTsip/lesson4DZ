import { Component, OnInit } from '@angular/core';
import {AnyoneQueryService} from '../../services/anyone-query.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Comment} from '../../models/Comment';
import {Post} from '../../models/Post';

@Component({
  selector: 'app-post-of-comments',
  templateUrl: './post-of-comments.component.html',
  styleUrls: ['./post-of-comments.component.css']
})
export class PostOfCommentsComponent implements OnInit {

  post: Post;
comments: Comment[];

  constructor(private anyoneQuery: AnyoneQueryService, private activatedRoute: ActivatedRoute, private router: Router) {

    this.post = this.router.getCurrentNavigation().extras.state.comment;

    this.activatedRoute.params.subscribe(value => {
      this.anyoneQuery.getCurrentCommentsOfPost(value.id).subscribe(comments => this.comments = comments);
    } );
  }

  ngOnInit(): void {
  }

}
