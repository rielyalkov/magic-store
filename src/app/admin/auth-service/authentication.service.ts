import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {map, tap} from 'rxjs/operators';

interface User {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user: string;
  loggedInStatus = false;

  constructor(
    private auth: AngularFireAuth,
  ) { }

  setLoginStatus(value: boolean): void {
    this.loggedInStatus = value;
  }

  login(email: string, password: string): Promise<any> {
      return this.auth.signInWithEmailAndPassword(email, password);
    }

  logout(): Promise<any> {
    return this.auth.signOut();
  }
}
