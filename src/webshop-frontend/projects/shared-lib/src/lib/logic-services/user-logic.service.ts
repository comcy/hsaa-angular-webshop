import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UsersLogicServiceInterface, UserViewModel } from '../domain';
import { DEFAULT_USERS, SYSTEM_USERS } from './sample-users';

@Injectable({
  providedIn: 'root',
})
export class UserLogicService implements UsersLogicServiceInterface {
  private users!: UserViewModel[];

  public userList$: BehaviorSubject<UserViewModel[]> = new BehaviorSubject<
    UserViewModel[]
  >(DEFAULT_USERS);

  constructor() {}

  public init(): void {
    this.users = this.loadUsers(); //  init is important to avoid push-errors on empty array
    this.userList$.next(this.loadUsers());
  }

  public addUser(user: UserViewModel): void {
    this.users.push(user);
    this.userList$.next(this.users);
  }

  private loadUsers(): UserViewModel[] {
    // COULD BE A CALL TO HTTP Service
    return SYSTEM_USERS;
  }
}
