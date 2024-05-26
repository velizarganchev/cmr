import { Injectable } from '@angular/core';
import { User } from '../../models/user.class';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersChanged = new Subject<User[]>();

  constructor() { }

  private users: User[] = [];

  getAll() {
    return this.users.slice();
  }

  add(user: User) {
    this.users.push(user);
    this.usersChanged.next(this.users.slice());
  }
}
