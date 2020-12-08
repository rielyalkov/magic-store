import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {tap} from 'rxjs/operators';

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
    localStorage.setItem('loggedIn', 'true');
  }

  get LoginStatus(): any {
    // this.auth.user.pipe(
    //   tap(q => console.log(q))
    // ).subscribe();
    return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString());
  }

  login(email: string, password: string): Promise<any> {
      return this.auth.signInWithEmailAndPassword(email, password);
    }
}
