import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(public http: HttpClient) {}

  url: string = 'http://localhost:8080/api';

  changeQuantity(id: number, change: string) {
    return this.http.post<any>(`${this.url}/user/cart/changequantity`, {
      id,
      change,
    });
  }

  applyCoupon(id: number, bookId: number, cartId: number) {
    return this.http.post<any>(`${this.url}/user/cart/applycoupon`, {
      id,
      bookId,
      cartId,
    });
  }
  removeCoupon(id: number, bookId: number, cartId: number) {
    return this.http.post<any>(`${this.url}/user/cart/removecoupon`, {
      id,
      bookId,
      cartId,
    });
  }
}
