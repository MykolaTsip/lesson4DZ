import { Component, OnInit } from '@angular/core';
import {QueryAllInfoService} from '../../services/query-all-info.service';
import {Comment} from '../../models/Comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comment: Comment[];

  constructor(private query: QueryAllInfoService) {
    this.query.getAllComments().subscribe(value => this.comment = value);
  }

  ngOnInit(): void {
  }

}
