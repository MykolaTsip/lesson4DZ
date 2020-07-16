import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Post} from '../../models/Post';
import {User} from '../../models/User';
import {AnyoneQueryService} from '../../services/anyone-query.service';

@Component({
  selector: 'app-user-of-posts',
  templateUrl: './user-of-posts.component.html',
  styleUrls: ['./user-of-posts.component.css']
})
export class UserOfPostsComponent implements OnInit {

  users: User;
  posts: Post[];

  constructor( private router: Router, private anyoneQuery: AnyoneQueryService, private activatedRoute: ActivatedRoute) {

     this.users = this.router.getCurrentNavigation().extras.state.user;

   this.activatedRoute.params.subscribe(value => {
     this.anyoneQuery.getCurrentPostsOfUser(value.id).subscribe(post => this.posts = post);
   });

  }

  ngOnInit(): void {
  }

}
