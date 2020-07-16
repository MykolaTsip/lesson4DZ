import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../models/Post';
import {Comment} from '../models/Comment';


@Injectable({
  providedIn: 'root'
})
export class AnyoneQueryService {

  constructor(private http: HttpClient) { }

  getCurrentPostsOfUser(id): Observable<Post> {
    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  }
  getCurrentCommentsOfPost(id): Observable<Comment> {
    return this.http.get<Comment>(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
  }
}
