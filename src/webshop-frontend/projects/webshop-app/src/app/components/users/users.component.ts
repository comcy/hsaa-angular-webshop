import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddUserDialogComponent } from 'projects/shared-lib/src/lib/components/dialogs/add-user-dialog/add-user-dialog.component';
import { CommonSnackbarComponent } from 'projects/shared-lib/src/lib/components/snackbar/common-snackbar/common-snackbar.component';
import { UsersLogicServiceInterface } from 'projects/shared-lib/src/lib/domain/core-services/user-logic-service.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  private durationInSeconds = 3;

  constructor(
    public usersLogicServiceInterface: UsersLogicServiceInterface,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  async ngOnInit(): Promise<void> {}

  public openAddUserDialog() {
    let dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(AddUserDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((result) => {
      this.snackBar.openFromComponent(CommonSnackbarComponent, {
        duration: this.durationInSeconds * 1000,
      });
    });
  }
}
