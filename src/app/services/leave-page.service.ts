import { Injectable } from '@angular/core';
import {CanActivate} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LeavePageService implements CanActivate {

  canActivate():  boolean  {
    return confirm('you want leave this page?');
  }
}
