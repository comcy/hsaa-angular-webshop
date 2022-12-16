import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserViewModel } from '../view-models';

@Injectable()
export abstract class UsersLogicServiceInterface {
  public abstract userList$: BehaviorSubject<UserViewModel[]>;

  public abstract init(): void;
  public abstract addUser(user: UserViewModel): void;
}
