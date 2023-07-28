import { Component, OnInit } from '@angular/core';
import { BookApiService } from 'src/app/core/services/book-api.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss'],
})
export class AdminHomeComponent implements OnInit {
  constructor(private bookApi: BookApiService) {}
  books: [] = [];
  ngOnInit(): void {
    this.bookApi.getBooks().subscribe(
      (res) => {
        if (res.success) {
          this.books = res.data;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
