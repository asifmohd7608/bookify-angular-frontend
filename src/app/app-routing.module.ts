import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/user/home/home.component';
import { AdminHomeComponent } from './modules/admin/admin-home/admin-home.component';
import { BookCreateFormComponent } from './modules/admin/book-create-form/book-create-form.component';
import { LoginFormComponent } from './shared/components/login-form/login-form.component';
import { SignupFormComponent } from './shared/components/signup-form/signup-form.component';
import { adminGuard, isLoggedIn, userGuard } from './core/guards/route.guard';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { BookEditFormComponent } from './modules/admin/book-edit-form/book-edit-form.component';
import { CartComponent } from './modules/user/cart/cart.component';
import { CouponCreateFormComponent } from './modules/admin/coupon-create-form/coupon-create-form.component';
import { CouponComponent } from './modules/admin/coupon/coupon.component';
import { CouponEditComponent } from './modules/admin/coupon-edit/coupon-edit.component';
import { MyOrdersComponent } from './modules/user/my-orders/my-orders.component';

const routes: Routes = [
  { path: '', component: LoginFormComponent, canActivate: [isLoggedIn] },
  { path: 'home', component: HomeComponent, canActivate: [userGuard] },
  {
    path: 'admin',
    children: [
      { path: '', component: AdminHomeComponent },
      {
        path: 'create',
        component: BookCreateFormComponent,
      },
      { path: 'book/edit/:id', component: BookEditFormComponent },
      {
        path: 'coupons',
        children: [
          { path: '', component: CouponComponent },
          { path: 'create', component: CouponCreateFormComponent },
          { path: 'edit/:id', component: CouponEditComponent },
        ],
      },
    ],
    canActivate: [adminGuard],
  },
  {
    path: 'user',
    children: [
      { path: '', component: HomeComponent },
      { path: 'cart', component: CartComponent },
      { path: 'myorders', component: MyOrdersComponent },
    ],
    canActivate: [userGuard],
  },
  { path: 'login', component: LoginFormComponent, canActivate: [isLoggedIn] },
  {
    path: 'signup',
    children: [
      { path: 'user', component: SignupFormComponent },
      { path: 'admin', component: SignupFormComponent },
    ],
    canActivate: [isLoggedIn],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
