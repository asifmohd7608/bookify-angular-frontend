import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {

  constructor(private http:HttpClient) { }
url:string='http://localhost:8080/api'
  getBooks(){
    return this.http.get<any>(`${this.url}/books`)
  }
}
