import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(public http: HttpClient) {}
  url: string = 'http://localhost:8080/api';

  getOrders() {
    return this.http.get<any>(`${this.url}/user/orders`);
  }
}
