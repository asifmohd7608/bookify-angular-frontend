import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { CouponService } from 'src/app/core/services/coupon.service';

@Component({
  selector: 'app-coupon-create-form',
  templateUrl: './coupon-create-form.component.html',
  styleUrls: ['./coupon-create-form.component.scss'],
})
export class CouponCreateFormComponent implements OnInit {
  constructor(
    public ufb: UntypedFormBuilder,
    public couponApi: CouponService
  ) {}
  categories: string[] = [];
  ngOnInit(): void {
    this.couponApi.fetchCoupons().subscribe((res) => {
      if (res.success) {
        res.data.forEach((category: { category_name: string }) => {
          this.categories.push(category.category_name);
        });
        this.categories.push('all');
      }
    });
  }

  couponCreateForm = this.ufb.group({
    Name: ['', [Validators.required]],
    Code: ['', [Validators.required]],
    Coupon_Offer: ['', [Validators.required]],
    Coupon_Type: ['', [Validators.required]],
    ImageFile: ['', [Validators.required]],
    Coupon_Status: ['', [Validators.required]],
    Validity_Start: ['', [Validators.required]],
    Validity_End: ['', [Validators.required]],
    Coupon_Category: ['', [Validators.required]],
  });

  onImageChange(event: any) {
    let file: File = event.target?.files[0];
    // console.log(file)
    if (file) {
      this.couponCreateForm.get('ImageFile')?.setValue(file);
    }
  }

  CouponSubmit() {
    this.couponCreateForm.markAllAsTouched();
    const formData = new FormData();
    Object.keys(this.couponCreateForm.value).forEach((key) => {
      formData.append(key, this.couponCreateForm.get(key)?.value);
    });
    this.couponCreateForm.valid &&
      this.couponApi.createCoupon(formData).subscribe((res) => {
        console.log(res);
      });
  }
}
