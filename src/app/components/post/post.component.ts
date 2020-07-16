import { Component, OnInit } from '@angular/core';
import {QueryAllInfoService} from '../../services/query-all-info.service';
import {Post} from '../../models/Post';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: Post[];

  constructor(private query: QueryAllInfoService, private router: Router) {
    this.query.getAllPosts().subscribe(value => this.posts = value);
  }

  ngOnInit(): void {
  }

  getComments(post): void {
    this.router.navigate([`comment/${post.id}`]);
  }
}
