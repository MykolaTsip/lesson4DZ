import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { UserComponent } from './components/user/user.component';
import { PostComponent } from './components/post/post.component';
import { CommentComponent } from './components/comment/comment.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {QueryAllInfoService} from './services/query-all-info.service';
import { UserOfPostsComponent } from './components/user-of-posts/user-of-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PostComponent,
    CommentComponent,
    UserOfPostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'users', component: UserComponent
        // children ...
      },
      {
        path: 'post/:id', component: UserOfPostsComponent
      },
      {
        path: 'posts', component: PostComponent
      },
      {
        path: 'comments', component: CommentComponent
      }
    ])
  ],
  providers: [QueryAllInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
