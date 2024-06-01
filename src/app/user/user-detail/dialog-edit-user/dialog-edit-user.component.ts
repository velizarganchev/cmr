import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';

import {
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { UserDetailComponent } from '../user-detail.component';
import { User } from '../../../../models/user.class';
import { DataStorageService } from '../../../data-storage.service';

@Component({
  selector: 'app-dialog-edit-user',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatProgressBarModule,
  ],
  templateUrl: './dialog-edit-user.component.html',
  styleUrl: './dialog-edit-user.component.scss'
})
export class DialogEditUserComponent {

  loading = false;
  user!: User;
  id!: string;

  constructor(
    private dialogRef: MatDialogRef<UserDetailComponent>,
    private dataService: DataStorageService) { }

  async onSaveEditUser() {
    this.loading = true;
    await this.dataService.updateUser(this.id, this.user);
    this.loading = false;
    this.dialogRef.close();
  }


  onCancelEdit(): void {
    this.dialogRef.close();
  }
}
