import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  constructor(
    private db: AngularFireDatabase,
  ) { }

  getProducts(): Observable<any> {
    return this.db.list('products').valueChanges();
  }

}
