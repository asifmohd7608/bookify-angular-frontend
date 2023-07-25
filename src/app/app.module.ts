import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/user/home/home.component';
import { BookCardComponent } from './modules/user/book-card/book-card.component';
import {HttpClientModule} from '@angular/common/http';
import { AdminHomeComponent } from './modules/admin/admin-home/admin-home.component';
import { BookTableRowComponent } from './modules/admin/book-table-row/book-table-row.component'
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { BookCreateFormComponent } from './modules/admin/book-create-form/book-create-form.component';
import {ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookCardComponent,
    AdminHomeComponent,
    BookTableRowComponent,
    NavbarComponent,
    BookCreateFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
