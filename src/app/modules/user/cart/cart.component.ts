import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookApiService } from 'src/app/core/services/book-api.service';
import { CartService } from 'src/app/core/services/cart.service';
import { CouponService } from 'src/app/core/services/coupon.service';
import { Cart } from 'src/app/shared/interfaces/cart';
import { Coupon } from 'src/app/shared/interfaces/coupon';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(
    public bookApi: BookApiService,
    private router: Router,
    public couponApi: CouponService,
    public ufb: UntypedFormBuilder,
    public cartApi: CartService
  ) {}

  cart: Cart[] = [];
  isModalOpen: boolean = false;
  eligibleCoupons: Coupon[] = [];
  currentBookId: number = 0;
  currentCartId: number = 0;
  popupMessage: { message: string } = { message: '' };

  ngOnInit(): void {
    this.bookApi.getCart().subscribe((res) => {
      if (res.success) {
        this.cart = res.cart;
      }
    });
  }

  couponForm = this.ufb.group({
    coupon: ['', [Validators.required]],
  });

  removeFromCart(id: number) {
    this.bookApi.removeCartItem(id).subscribe((res) => {
      if (res.success) {
        this.cart = res.cart;
      }
    });
  }
  deleteCart() {
    this.bookApi.deleteCart().subscribe((res) => {
      if (res.success) {
        this.cart = [];
      }
    });
  }
  applyCoupon() {
    let couponId = this.couponForm.get('coupon')?.value;
    this.cartApi
      .applyCoupon(couponId, this.currentBookId, this.currentCartId)
      .subscribe((res) => {
        console.log(res);
        if (res.success) {
          this.cart = res.data;
          this.isModalOpen = false;
        } else if (!res.success) {
          this.popupMessage.message = res.errorMessage;
          this.isModalOpen = false;
        }
      });
  }

  removeCoupon() {
    let couponId = this.couponForm.get('coupon')?.value;
    this.cartApi
      .removeCoupon(couponId, this.currentBookId, this.currentCartId)
      .subscribe((res) => {
        if (res.success) {
          this.cart = res.data;
          this.isModalOpen = false;
        }
      });
    console.log('removed');
  }

  applyBtnEvent(event: { id: number; cartId: number }) {
    this.couponApi.fetchEligibleCoupons(event.id).subscribe((res) => {
      if (res.success) {
        this.eligibleCoupons = res.data;
        this.currentBookId = event.id;
        this.currentCartId = event.cartId;
        this.isModalOpen = true;
      }
    });
  }

  closeModal() {
    this.isModalOpen = false;
  }
  checkoutCart() {}
}
