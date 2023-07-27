import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export function roleRouteGuard(): CanActivateFn{
  const auth:AuthService=inject(AuthService);
  return ()=>{
    if(auth.getRole()){
      return true
    }else{
      return false
    }
  }
};
