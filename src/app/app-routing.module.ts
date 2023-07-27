import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/user/home/home.component';
import { AdminHomeComponent } from './modules/admin/admin-home/admin-home.component';
import { BookCreateFormComponent } from './modules/admin/book-create-form/book-create-form.component';
import { LoginFormComponent } from './shared/components/login-form/login-form.component';
import { SignupFormComponent } from './shared/components/signup-form/signup-form.component';
import { roleRouteGuard } from './core/guards/role-route.guard';

const routes: Routes = [
  { path:'home',component:HomeComponent},
  { path:'admin', children:[
    {path:'',component:AdminHomeComponent},
    {path:'create',component:BookCreateFormComponent,canActivate:[roleRouteGuard]}
  ]},
  {path:'login',component:LoginFormComponent},
  {path:'signup',children:[
    {path:'user',component:SignupFormComponent},
    {path:'admin',component:SignupFormComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
