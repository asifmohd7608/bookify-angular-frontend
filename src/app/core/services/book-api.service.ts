import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookApiService {
  constructor(private http: HttpClient) {}
  url: string = 'http://localhost:8080/api';
  getBooks() {
    return this.http.get<any>(`${this.url}/books`);
  }
  getCategories() {
    return this.http.get<any>(`${this.url}/books/categories`);
  }
  addBook(bookData: FormData) {
    return this.http.post(`${this.url}/books/add`, bookData);
  }
  editBook(bookData: FormData, id: string | null) {
    return this.http.post(`${this.url}/books/update/${id}`, bookData);
  }
  changeBookStatus(id: number) {
    return this.http.post<any>(`${this.url}/books/changestatus`, { id });
  }

  getBookById(id: any) {
    return this.http.get<any>(`${this.url}/books/${id}`);
  }

  addToCart(id: number) {
    return this.http.post<any>(`${this.url}/user/addtocart`, { id });
  }
  getCart() {
    return this.http.get<any>(`${this.url}/user/getcart`);
  }
  removeCartItem(id: number) {
    return this.http.post<any>(`${this.url}/user/cart/removeitem`, { id });
  }
  deleteCart() {
    return this.http.delete<any>(`${this.url}/user/cart/delete`);
  }
}
