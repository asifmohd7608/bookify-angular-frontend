import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CouponService } from 'src/app/core/services/coupon.service';

@Component({
  selector: 'app-coupon-card',
  templateUrl: './coupon-card.component.html',
  styleUrls: ['./coupon-card.component.scss']
})
export class CouponCardComponent {
constructor(public couponApi: CouponService, public router: Router) {}

  @Input() Coupon = {
  id:0,
   Name:'',
   Code:'',
   Coupon_Offer:0,
   Coupon_Type:'',
   Image_Path:'',
   Coupon_Status:0,
   Validity_Start:new Date(),
   Validity_End:new Date(),
   Coupon_Category:''  
  };

  changeStatus(id: number) {
    // this.couponApi.changeBookStatus(id).subscribe((res) => {
    //   console.log(res);
    //   if (res.success) {
    //     this.coupon.Status = res.data.status;
    //   }
    // });
    console.log('success')
  }
  loadEditForm(id: number) {
    this.router.navigate([`/admin/coupons/edit/${id}`]);
    console.log('edit page')
  }
}
