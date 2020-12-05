import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {windowCount} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor() { }

  private enemiesCount: BehaviorSubject<number> = new BehaviorSubject(0);

  get Count(): number { return this.enemiesCount.getValue(); }

  subscribeToCount(): Observable<number> {
    return this.enemiesCount.asObservable();
  }

  changeCount(): void {
    this.enemiesCount.next(this.enemiesCount.getValue() + 1);
  }
}
