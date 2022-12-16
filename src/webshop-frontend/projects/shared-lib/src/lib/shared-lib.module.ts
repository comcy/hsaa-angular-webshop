import { NgModule } from '@angular/core';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AddUserDialogComponent } from './components/dialogs/add-user-dialog/add-user-dialog.component';
import { MatSelectModule } from '@angular/material/select';
import { AddUserFormComponent } from './components/forms/add-user-form/add-user-form.component';
import { UsersListComponent } from './components/lists/users-list/users-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { UsersLogicServiceInterface } from './domain/core-services/user-logic-service.interface';
import { UserLogicService } from './logic-services/user-logic.service';
import { CommonSnackbarComponent } from './components/snackbar/common-snackbar/common-snackbar.component';

@NgModule({
  declarations: [
    MenuBarComponent,
    AddUserDialogComponent,
    AddUserFormComponent,
    UsersListComponent,
    CommonSnackbarComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule,
    LayoutModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatSliderModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatDialogModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatSelectModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatTableModule,
  ],
  exports: [MenuBarComponent, UsersListComponent],
  providers: [
    { provide: UsersLogicServiceInterface, useClass: UserLogicService },
  ],
})
export class SharedLibModule {}
