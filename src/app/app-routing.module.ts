import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/user/home/home.component';
import { AdminHomeComponent } from './modules/admin/admin-home/admin-home.component';
import { BookCreateFormComponent } from './modules/admin/book-create-form/book-create-form.component';

const routes: Routes = [
  { path:'home',component:HomeComponent},
  { path:'admin', children:[
    {path:'',component:AdminHomeComponent},
    {path:'create',component:BookCreateFormComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
