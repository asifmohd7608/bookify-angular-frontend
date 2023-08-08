import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/shared/interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(public http: HttpClient) {}

  url: string = 'http://localhost:8080/api';

  getUserDetails() {
    return this.http.get<any>(`${this.url}/user/profile`);
  }
  updateProfile(data: User) {
    return this.http.post<any>(`${this.url}/user/profile/update`, data);
  }
}
