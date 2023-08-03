import { Component, OnInit } from '@angular/core';
import { CouponService } from 'src/app/core/services/coupon.service';
import { Coupon } from 'src/app/shared/interfaces/coupon';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.scss'],
})
export class CouponComponent implements OnInit {
  constructor(public couponApi: CouponService) {}

  coupons: Coupon[] = [];

  ngOnInit(): void {
    this.couponApi.fetchCoupons().subscribe((res) => {
      if (res.success) {
        this.coupons = res.data;
      }
    });
  }
}
