import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export function roleRouteGuard(): boolean{
  const auth:AuthService=inject(AuthService);
  return false;
  // return ()=>{
  //   // let data={};
  //   // auth.getRole().subscribe(res=>{
  //   //   console.log(res)
  //   // })

  //   // if(auth.getRole()){
  //   //   return true
  //   // }else{
  //   //   return false
  //   // }

  //   return false
  // }
};
