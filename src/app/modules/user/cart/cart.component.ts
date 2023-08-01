import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookApiService } from 'src/app/core/services/book-api.service';
import { Cart } from 'src/app/shared/interfaces/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(public bookApi: BookApiService, private router: Router) {}
  cart: Cart[] = [];

  ngOnInit(): void {
    this.bookApi.getCart().subscribe((res) => {
      if (res.success) {
        console.log(res);
        this.cart = res.cart;
      }
    });
  }
  removeFromCart(id: number) {
    this.bookApi.removeCartItem(id).subscribe((res) => {
      if (res.success) {
        this.cart = res.cart;
      }
    });
  }
  deleteCart() {
    this.bookApi.deleteCart().subscribe((res) => {
      console.log(res);
      if (res.success) {
        this.cart = [];
      }
    });
  }
}
