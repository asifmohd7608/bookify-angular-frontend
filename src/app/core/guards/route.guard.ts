import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { of, switchMap } from 'rxjs';
import { Router } from '@angular/router';

export const adminGuard: CanActivateFn = () => {
  let auth = inject(AuthService);
  let router = inject(Router);

  return auth.getRole().pipe(
    switchMap((res) => {
      if (res.success && res.data.Role == 'admin') {
        localStorage.setItem('userName', res.data.userName);
        return of(true);
      } else if (res.success && res.data.Role == 'user') {
        console.log(res);
        localStorage.setItem('userName', res.data.userName);
        return router.navigate(['/user']);
      } else {
        return router.navigate(['/login']);
      }
    })
  );
};

export const userGuard: CanActivateFn = () => {
  let auth = inject(AuthService);
  let router = inject(Router);
  return auth.getRole().pipe(
    switchMap((res) => {
      if (res.success && res.data.Role == 'user') {
        localStorage.setItem('userName', res.data.userName);
        return of(true);
      } else if (res.success && res.data.Role == 'admin') {
        localStorage.setItem('userName', res.data.userName);
        return router.navigate(['/admin']);
      } else {
        return router.navigate(['/login']);
      }
    })
  );
};

export const isLoggedIn: CanActivateFn = () => {
  let token = localStorage.getItem('Token');
  let router = inject(Router);
  if (token?.length! > 1) {
    return router.navigate(['/user']);
  } else {
    return true;
  }
};
