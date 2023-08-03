import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CouponService {
  constructor(public http: HttpClient) {}

  url: string = 'http://localhost:8080/api';

  createCoupon(data: FormData) {
    return this.http.post<any>(`${this.url}/coupons/create`, data);
  }
  fetchCouponCategories() {
    return this.http.get<any>(`${this.url}/coupons/categories`);
  }
  fetchCoupons() {
    return this.http.get<any>(`${this.url}/coupons`);
  }
  fetchEligibleCoupons(id: number) {
    return this.http.post<any>(`${this.url}/coupons/eligible`, { id });
  }
  fetchCouponById(id: any) {
    return this.http.get<any>(`${this.url}/coupons/edit/${id}`);
  }
  updateCoupon(id: string | null, data: FormData) {
    return this.http.post<any>(`${this.url}/coupons/update/${id}`, data);
  }
  changeCouponStatus(id: number) {
    return this.http.post<any>(`${this.url}/coupons/changestatus`, { id });
  }
}
