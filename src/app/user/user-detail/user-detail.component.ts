import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { ActivatedRoute } from '@angular/router';
import { DataStorageService } from '../../data-storage.service';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit {
  id = '';
  user: any = {};

  constructor(private route: ActivatedRoute, private dataService: DataStorageService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>
      this.id = params['id']);
    this.setUser();
  }

  async setUser() {
    this.user = await this.dataService.getUserById(this.id);
  }

  onEditUser(){
    console.log('EDIT');
    
  }

}
