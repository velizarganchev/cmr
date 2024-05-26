import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../user.component';
import { User } from '../../../models/user.class';
import { DataStorageService } from '../../data-storage.service';

import {
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  providers: [provideNativeDateAdapter()],
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
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent {
  user = new User();
  birthDate!: Date;
  loading = false;

  constructor(
    public dialogRef: MatDialogRef<UserComponent>,
    private dataService: DataStorageService) { }

  async onSaveUser() {
    this.loading = true;

    this.user.birthDate = this.birthDate.getTime();
    await this.dataService.storeUser(this.user);
    
    this.loading = false;
    this.dialogRef.close();
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
