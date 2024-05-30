import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, doc, getDoc } from '@angular/fire/firestore';
import { User } from '../models/user.class';
import { Observable } from 'rxjs';

const PATH = 'users';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  private acollection = collection(this.firestore, 'users');

  constructor(private firestore: Firestore) { }

  async storeUser(user: User) {
    await addDoc(this.acollection, {
      'firstName': user.firstName,
      'lastName': user.lastName,
      'email': user.email,
      'birthDate': user.birthDate,
      'address': user.address,
      'zip': user.zip,
      'city': user.city
    });
  }

  getAllUsers(): Observable<User[]> {
    return collectionData(this.acollection, { idField: 'id' }) as Observable<User[]>;
  }

  async getUserById(id: string) {
    try {
      const docRef = doc(this.firestore, PATH, id);
      const snapshot = await getDoc(docRef);
      return snapshot.data() as User;   
    } catch (error) {
      return undefined;
    }
  }
}
