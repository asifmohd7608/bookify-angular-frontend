import { Component } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CouponService } from 'src/app/core/services/coupon.service';
import {
  validityStartValidator,
  validityEndValidator,
  offerValidator,
} from 'src/app/shared/Validators/couponFormValidator';

@Component({
  selector: 'app-coupon-edit',
  templateUrl: './coupon-edit.component.html',
  styleUrls: ['./coupon-edit.component.scss'],
})
export class CouponEditComponent {
  id: string | null = '';
  constructor(
    public ufb: UntypedFormBuilder,
    public couponApi: CouponService,
    public router: Router,
    public route: ActivatedRoute
  ) {}
  categories: { id: number; category_name: string }[] = [];
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });

    this.couponApi.fetchCouponCategories().subscribe((res) => {
      if (res.success) {
        res.data.forEach((category: { id: number; category_name: string }) => {
          this.categories.push(category);
        });
        this.categories.push({ id: 0, category_name: 'all' });
      }
    });

    this.couponApi.fetchCouponById(this.id).subscribe((res) => {
      if (res.success) {
        Object.keys(this.couponEditForm.value).forEach((key) => {
          if (key === 'Coupon_Status') {
            this.couponEditForm.get(key)?.setValue(`${res.data[key]}`);
          } else {
            this.couponEditForm.get(key)?.setValue(res.data[key]);
          }
        });
      }
    });
  }

  couponEditForm = this.ufb.group(
    {
      Name: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20),
        ],
      ],
      Code: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20),
        ],
      ],
      Coupon_Offer: ['', [Validators.required]],
      Coupon_Type: ['', [Validators.required]],
      ImageFile: [''],
      Coupon_Status: ['', [Validators.required]],
      Validity_Start: ['', [Validators.required]],
      Validity_End: ['', [Validators.required]],
      Coupon_Category: ['', [Validators.required]],
    },
    {
      validator: Validators.compose([
        validityStartValidator,
        validityEndValidator,
        offerValidator,
      ]),
    }
  );

  onImageChange(event: any) {
    let file: File = event.target?.files[0];
    if (file) {
      this.couponEditForm.get('ImageFile')?.setValue(file);
    }
  }

  CouponSubmit() {
    this.couponEditForm.markAllAsTouched();
    const formData = new FormData();
    Object.keys(this.couponEditForm.value).forEach((key) => {
      formData.append(key, this.couponEditForm.get(key)?.value);
    });
    this.couponEditForm.valid &&
      this.couponApi.updateCoupon(this.id, formData).subscribe((res) => {
        if (res.success) {
          this.router.navigate(['/admin', 'coupons']);
        }
      });
  }
}
