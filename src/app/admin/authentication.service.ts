import { Injectable } from '@angular/core';


interface User {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user: string;

  constructor() { }

  public get userValue(): string {
    return this.user;
  }

  login(user: string, pass: string): void {
    if (user === 'admin' && pass === 'admin') {
      this.user = user;
    } else {
      this.user = undefined;
    }
  }
}
