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
import {AnyoneQueryService} from './services/anyone-query.service';
import { PostOfCommentsComponent } from './components/post-of-comments/post-of-comments.component';
import {LeavePageService} from './services/leave-page.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PostComponent,
    CommentComponent,
    UserOfPostsComponent,
    PostOfCommentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'users', component: UserComponent,
         children: [
           {
             path: 'post/:id', component: UserOfPostsComponent
           }
         ],
        canActivate: [LeavePageService]
      },
      {
        path: 'posts', component: PostComponent,
        children: [
          {
            path: 'comment/:id', component: PostOfCommentsComponent
          }
        ],
        canActivate: [LeavePageService]
      },
      {
        path: 'comments', component: CommentComponent,
        canActivate: [LeavePageService]
      }
    ])
  ],
  providers: [QueryAllInfoService, AnyoneQueryService, LeavePageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
