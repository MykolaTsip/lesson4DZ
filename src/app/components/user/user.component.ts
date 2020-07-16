import { Component, OnInit } from '@angular/core';
import {QueryAllInfoService} from '../../services/query-all-info.service';
import {User} from '../../models/User';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];

  constructor(private query: QueryAllInfoService, private router: Router) {
    this.query.getAllUsers().subscribe(value => this.users = value);
  }

  ngOnInit(): void {
  }

  postfInfo(user): void {
     this.router.navigate([`post/${user.id}`], {state: {user}});
  }
}
