import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http:HttpClient) { }

  url='http://localhost:8080/api'


  userLogin(data:{}){
    return this.http.post<any>(`${this.url}/auth/login/user`,data)
  }
  userSignUp(data:{},url:string){
    if(url==='/signup/user'){
   return this.http.post<any>(`${this.url}/auth/signup/user`,data)
    }else{
      return  this.http.post<any>(`${this.url}/auth/signup/admin`,data)
    }
  }
  getRole():boolean{
    let res=this.http.get<any>(`${this.url}/getrole`)
    let data=of(res)
    console.log(data)
    return true
  }

}
