import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http:HttpClient) { }

  url='http://localhost:8080/api';


  userLogin(data:{}){
    return this.http.post<any>(`${this.url}/auth/login/user`,data);
  }
  userSignUp(data:{},url:string){
    if(url==='/signup/user'){
   return this.http.post<any>(`${this.url}/auth/signup/user`,data);
    }else{
      return  this.http.post<any>(`${this.url}/auth/signup/admin`,data);
    }
  }
  getRole(){
    return this.http.get<any>(`${this.url}/auth/status`);
  }
  getToken(){
    let token=localStorage.getItem('Token');
    return token;
  }
  logout(){
    localStorage.setItem('Token','');
    localStorage.setItem('Role','');
    return true;
  }

}
