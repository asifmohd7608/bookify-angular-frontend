import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/user/home/home.component';
import { BookCardComponent } from './modules/user/book-card/book-card.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AdminHomeComponent } from './modules/admin/admin-home/admin-home.component';
import { BookTableRowComponent } from './modules/admin/book-table-row/book-table-row.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { BookCreateFormComponent } from './modules/admin/book-create-form/book-create-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './shared/components/login-form/login-form.component';
import { SignupFormComponent } from './shared/components/signup-form/signup-form.component';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { BookEditFormComponent } from './modules/admin/book-edit-form/book-edit-form.component';
import { CartComponent } from './modules/user/cart/cart.component';
import { CartCardComponent } from './modules/user/cart-card/cart-card.component';
import { CouponCreateFormComponent } from './modules/admin/coupon-create-form/coupon-create-form.component';
import { CouponComponent } from './modules/admin/coupon/coupon.component';
import { CouponCardComponent } from './modules/admin/coupon-card/coupon-card.component';
import { CouponEditComponent } from './modules/admin/coupon-edit/coupon-edit.component';
import { PopupMessageComponent } from './shared/components/popup-message/popup-message.component';
import { MyOrdersComponent } from './modules/user/my-orders/my-orders.component';
import { ProfileComponent } from './shared/components/profile/profile.component';
import { ProfileEditComponent } from './shared/components/profile-edit/profile-edit.component';
import { ProfileDataComponent } from './shared/components/profile-data/profile-data.component';
import { ClickedOutsideDirective } from './shared/directives/clicked-outside.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookCardComponent,
    AdminHomeComponent,
    BookTableRowComponent,
    NavbarComponent,
    BookCreateFormComponent,
    LoginFormComponent,
    SignupFormComponent,
    BookEditFormComponent,
    CartComponent,
    CartCardComponent,
    CouponCreateFormComponent,
    CouponComponent,
    CouponCardComponent,
    CouponEditComponent,
    PopupMessageComponent,
    MyOrdersComponent,
    ProfileComponent,
    ProfileEditComponent,
    ProfileDataComponent,
    // ClickedOutsideDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
