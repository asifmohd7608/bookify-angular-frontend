import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { BookApiService } from 'src/app/core/services/book-api.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
  constructor(public bookApi: BookApiService) {}
  @Input() book = {
    id: 0,
    Book_Title: '',
    File_Path: '',
    Price: '',
    No_Of_Copies_Current: 0,
  };
  ngOnInit(): void {}
  addToCart(id: number) {
    this.bookApi.addToCart(id).subscribe((res) => {
      console.log(res);
    });
  }
}
