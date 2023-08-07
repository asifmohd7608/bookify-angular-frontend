import { AbstractControl } from '@angular/forms';

export function passwordMatch(
  control: AbstractControl
): { [key: string]: any } | null {
  const password = control.get('Password')?.value;
  const passwordConfirm = control.get('PasswordConfirm')?.value;

  if (password.length > 0 && password != passwordConfirm) {
    return { passwordNoMatch: true };
  } else {
    return null;
  }
}
export function numberValidator(
  controls: AbstractControl
): { [key: string]: any } | null {
  const reqNumber = controls.get('Mobile')?.value;
  let pattern = /^\d+$/;
  if (!pattern.test(reqNumber) && reqNumber.length > 0) {
    return {
      notValidMobile: true,
    };
  } else {
    return null;
  }
}
