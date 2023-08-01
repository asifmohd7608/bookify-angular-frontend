import { Component, Input, Output } from '@angular/core';
import { BookApiService } from 'src/app/core/services/book-api.service';
import { EventEmitter } from '@angular/core';
import { Cart } from 'src/app/shared/interfaces/cart';
import { UntypedFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.scss'],
})
export class CartCardComponent {
  constructor(public bookApi: BookApiService, public ufb: UntypedFormBuilder) {}

  @Input() cartItem = {
    Book_Id: 0,
    Book_Title: '',
    Quantity: 0,
    Total_Price: 0,
    Unit_Price: 0,
    User_Id: 0,
    id: 0,
  };
  @Input() cart: Cart[] = [];
  @Output() remove = new EventEmitter();

  couponForm = this.ufb.group({
    coupon: ['', []],
  });

  removeFromCart(id: number) {
    this.remove.emit(id);
  }
}
