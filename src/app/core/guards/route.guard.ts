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
        return of(true);
      } else {
        return router.navigate(['/home']);
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
        return of(true);
      } else {
        return router.navigate(['/admin']);
      }
    })
  );
};

export const isLoggedIn: CanActivateFn = () => {
  let token = localStorage.getItem('Token');
  let router = inject(Router);
  if (token?.length! > 1) {
    return router.navigate(['/home']);
  } else {
    return true;
  }
};
