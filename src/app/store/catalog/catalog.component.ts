import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart/cart-service/cart.service';
import {CatalogService} from './catalog-service/catalog.service';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  constructor(
    private cartService: CartService,
    private catalogService: CatalogService,
  ) { }

  cards = new Array(12);
  loadingIMG: boolean;

  ngOnInit(): void {
    this.catalogService.getProducts().pipe(
      map(q => this.cards = q),
      tap(q => console.log(q))
    ).subscribe();
  }

  addToCart(): void {
    this.cartService.changeCount();
  }
}
