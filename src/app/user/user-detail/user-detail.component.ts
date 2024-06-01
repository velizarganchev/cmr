import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { ActivatedRoute } from '@angular/router';
import { DataStorageService } from '../../data-storage.service';
import { DialogEditUserComponent } from './dialog-edit-user/dialog-edit-user.component';
import { User } from '../../../models/user.class';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit {
  id = '';
  user!: User;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataStorageService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>
      this.id = params['id']);
    this.setUser();
  }

  async setUser() {
    this.user = new User(await this.dataService.getUserById(this.id));
  }

  onEditDialog(): void {
    const editDialog = this.dialog.open(DialogEditUserComponent);
    editDialog.componentInstance.user = new User(this.user.toJSON());
    editDialog.componentInstance.id = this.id;

    editDialog.afterClosed().subscribe(result => {
      this.user = result;
    });
  }

}
