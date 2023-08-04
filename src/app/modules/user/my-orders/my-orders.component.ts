import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/core/services/orders.service';
import { Order } from 'src/app/shared/interfaces/order';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss'],
})
export class MyOrdersComponent implements OnInit {
  constructor(public orderApi: OrdersService) {}
  orders: Order[] = [];
  date: number = Date.now();
  ngOnInit(): void {
    this.orderApi.getOrders().subscribe((res) => {
      console.log(res);
      if (res.success) {
        this.orders = res.data;
      }
    });
  }
}
