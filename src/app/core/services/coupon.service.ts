import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CouponService {
  constructor(public http: HttpClient) {}

  url: string = 'http://localhost:8080/api';

  createCoupon(data: FormData) {
    return this.http.post(`${this.url}/coupons/create`, data);
  }
  fetchCoupons() {
    return this.http.get<any>(`${this.url}/coupons/categories`);
  }
}
