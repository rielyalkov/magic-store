import { Component, OnInit } from '@angular/core';
import {CartService} from './cart/cart-service/cart.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(
    private cartService: CartService,
  ) { }

  enemiesCount: number;

  ngOnInit(): void {
    this.cartService.subscribeToCount().pipe(
      tap(() => this.enemiesCount = this.cartService.Count),
    ).subscribe();
  }

}
