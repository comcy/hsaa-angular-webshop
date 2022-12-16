import { Component, Input, OnInit } from '@angular/core';
import { UsersLogicServiceInterface } from '../../../domain/core-services/user-logic-service.interface';

@Component({
  selector: 'lib-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  @Input() usersList!: UsersLogicServiceInterface;

  public resultsLength = 0;
  public displayedColumns: string[] = [
    'userName',
    'firstName',
    'lastName',
    'email',
  ];

  constructor() {}

  ngOnInit(): void {
    this.usersList.init();
  }
}
