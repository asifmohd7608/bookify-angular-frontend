import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CouponService } from 'src/app/core/services/coupon.service';
import { offerValidator, validityEndValidator, validityStartValidator } from 'src/app/shared/Validators/couponFormValidator';


@Component({
  selector: 'app-coupon-create-form',
  templateUrl: './coupon-create-form.component.html',
  styleUrls: ['./coupon-create-form.component.scss'],
})
export class CouponCreateFormComponent implements OnInit {
  constructor(
    public ufb: UntypedFormBuilder,
    public couponApi: CouponService,public router:Router
  ) {}
  categories: {id:number,category_name: string }[] = [];
  ngOnInit(): void {
    this.couponApi.fetchCouponCategories().subscribe((res) => {
      if (res.success) {
        res.data.forEach((category: {id:number, category_name: string }) => {
          this.categories.push(category);
        });
        this.categories.push({id:0,category_name:'all'});
      }
    });
  }

  couponCreateForm = this.ufb.group({
    Name: ['', [Validators.required,Validators.minLength(4),Validators.maxLength(20)]],
    Code: ['', [Validators.required,Validators.minLength(4),Validators.maxLength(20)]],
    Coupon_Offer: ['', [Validators.required]],
    Coupon_Type: ['', [Validators.required]],
    ImageFile: ['', [Validators.required]],
    Coupon_Status: ['', [Validators.required]],
    Validity_Start: ['', [Validators.required]],
    Validity_End: ['', [Validators.required]],
    Coupon_Category: ['', [Validators.required]],
  },{validator:Validators.compose([validityStartValidator,validityEndValidator,offerValidator])});

  onImageChange(event: any) {
    let file: File = event.target?.files[0];
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
        if(res.success){
          this.router.navigate(['/admin','coupons'])
        }
      });
  }
}
