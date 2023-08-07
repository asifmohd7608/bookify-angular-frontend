import { AbstractControl } from '@angular/forms';

export function stockValidator(
  control: AbstractControl
): { [key: string]: any } | null {
  const Actual = control.get('No_Of_Copies_Actual')?.value;
  const Current = control.get('No_Of_Copies_Current')?.value;
  if (parseInt(Actual) < parseInt(Current)) {
    return { Actualisless: true };
  } else {
    return null;
  }
}

export function availableValidator(
  control: AbstractControl
): { [key: string]: any } | null {
  const Current = control.get('No_Of_Copies_Current')?.value;
  const available = control.get('Available')?.value;
  if (parseInt(Current) > 0 && available == 0) {
    return { outofstock: true };
  } else if (parseInt(Current) == 0 && available == 1) {
    return { instock: true };
  } else {
    return null;
  }
}

export function isbnValidator(
  control: AbstractControl
): { [key: string]: any } | null {
  let pattern = /^\d+$/;
  const isbn = control.get('ISBN')?.value;
  if (isbn && !pattern.test(isbn)) {
    return { isbnNotNumber: true };
  } else if (isbn && isbn.toString().length != 10) {
    return { isbnError: true };
  } else {
    return null;
  }
}

export function publicationDate(
  control: AbstractControl
): { [key: string]: any } | null {
  let publicationDate = control.get('Publication_Year')?.value;
  console.log(publicationDate);
  let currentDate = Date.now();
  if (Date.parse(publicationDate) > currentDate) {
    return { Publication_Year: true };
  } else {
    return null;
  }
}
