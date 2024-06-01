import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { DialogAddUserComponent } from './dialog-add-user/dialog-add-user.component';
import { DataStorageService } from '../data-storage.service';
import { AsyncPipe } from '@angular/common';
import { User } from '../../models/user.class';
import { Observable, tap } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterLink,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatTooltipModule,
    MatCardModule,
    MatTableModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'city'];
  dataSource!: Observable<User[]>;


  constructor(public dialog: MatDialog, private dataService: DataStorageService) { }

  ngOnInit(): void {
    this.dataSource = this.dataService.getAllUsers().pipe(tap(values => console.log(values)
    ));
  }

  onOpenDialog(): void {
    this.dialog.open(DialogAddUserComponent);
  }
}
