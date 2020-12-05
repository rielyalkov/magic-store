import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart/cart-service/cart.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  constructor(
    private cartService: CartService,
  ) { }

  cards = new Array(12);

  ngOnInit(): void {
  }

  addToCart(): void {
    this.cartService.changeCount();
  }
}
