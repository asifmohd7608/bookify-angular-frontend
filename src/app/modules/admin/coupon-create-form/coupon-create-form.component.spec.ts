import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponCreateFormComponent } from './coupon-create-form.component';

describe('CouponCreateFormComponent', () => {
  let component: CouponCreateFormComponent;
  let fixture: ComponentFixture<CouponCreateFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CouponCreateFormComponent]
    });
    fixture = TestBed.createComponent(CouponCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
