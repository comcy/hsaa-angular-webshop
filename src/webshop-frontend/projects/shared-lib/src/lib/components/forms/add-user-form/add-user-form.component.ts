import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersLogicServiceInterface } from '../../../domain/core-services/user-logic-service.interface';

@Component({
  selector: 'lib-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css'],
})
export class AddUserFormComponent implements OnInit {
  @Output() userAdded: EventEmitter<any> = new EventEmitter<any>();

  public addUserForm: FormGroup = this.formBuilder.group({
    userName: ['', [Validators.required, Validators.maxLength(5)]],
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private usersLogicServiceInterface: UsersLogicServiceInterface
  ) {}

  ngOnInit(): void {}

  public submit() {
    this.usersLogicServiceInterface.addUser(this.addUserForm.value);
    this.userAdded.emit();
  }
}
