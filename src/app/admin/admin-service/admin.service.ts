import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private db: AngularFireDatabase,
  ) { }

  newProduct(): void {
    this.db.database.ref('data').push({name});
  }

}
