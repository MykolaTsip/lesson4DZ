import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Post} from '../../models/Post';
import {User} from '../../models/User';

@Component({
  selector: 'app-user-of-posts',
  templateUrl: './user-of-posts.component.html',
  styleUrls: ['./user-of-posts.component.css']
})
export class UserOfPostsComponent implements OnInit {

  users: User[];
  posts: Post[];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {

     this.users = this.router.getCurrentNavigation().extras.state.user;
  }

  ngOnInit(): void {
  }

}
