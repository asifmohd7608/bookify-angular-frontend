import { Component, Input, Output } from '@angular/core';
import { BookApiService } from 'src/app/core/services/book-api.service';
import { EventEmitter } from '@angular/core';
import { Cart } from 'src/app/shared/interfaces/cart';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.scss'],
})
export class CartCardComponent {
  constructor(public bookApi: BookApiService, public cartApi: CartService) {}
  popup = '';
  @Input() cartItem = {
    Book_Id: 0,
    Book_Title: '',
    Quantity: 0,
    Total_Price: 0,
    Unit_Price: 0,
    Discount: 0,
    Amount_Payable: 0,
    User_Id: 0,
    id: 0,
  };
  @Input() cart: Cart[] = [];
  @Output() remove = new EventEmitter();
  @Output() applyCouponClick = new EventEmitter();

  removeFromCart(id: number) {
    this.remove.emit(id);
  }
  incrementQuantity(id: number) {
    this.cartApi.changeQuantity(id, 'increment').subscribe((res) => {
      if (res.success) {
        this.cartItem = res.data;
      } else if (!res.success) {
        this.popup = res.errorMessage;
        setTimeout(() => {
          this.popup = '';
        }, 3000);
      }
    });
  }
  decrementQuantity(id: number) {
    this.cartApi.changeQuantity(id, 'decrement').subscribe((res) => {
      if (res.success) {
        this.cartItem = res.data;
      } else if (!res.success) {
        this.popup = res.errorMessage;
        setTimeout(() => {
          this.popup = '';
        }, 3000);
      }
    });
  }
  applyClick(id: number, cartId: number) {
    this.applyCouponClick.emit({ id, cartId });
  }
}
