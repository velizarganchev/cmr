import { Injectable, inject } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { UserService } from './user/user.service';
import { User } from '../models/user.class';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  firestore: Firestore = inject(Firestore);

  constructor(private userService: UserService) { }

 async storeUser(user: User) {
    const acollection = collection(this.firestore, 'users');
   await addDoc(acollection, {
      'firstName': user.firstName,
      'lastName': user.lastName,
      'birthDate': user.birthDate,
      'addresse': user.addresse,
      'zip': user.zip,
      'city': user.city
    }).then((res) => {
      if (res.id) {
        this.userService.add(user);
      }
    });
  }
}
