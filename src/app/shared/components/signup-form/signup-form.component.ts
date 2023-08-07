import { Component } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import {
  numberValidator,
  passwordMatch,
} from '../../Validators/authFormValidator';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent {
  constructor(
    public ufb: UntypedFormBuilder,
    private auth: AuthService,
    public router: Router
  ) {}

  signupForm = this.ufb.group(
    {
      Email: ['', [Validators.required, Validators.email]],
      First_Name: ['', [Validators.required, Validators.minLength(2)]],
      Last_Name: ['', [Validators.required, Validators.minLength(2)]],
      Address: this.ufb.group({
        AddressLine1: ['', [Validators.required, Validators.minLength(2)]],
        AddressLine2: ['', [Validators.required, Validators.minLength(2)]],
        AddressLine3: ['', [Validators.required, Validators.minLength(2)]],
      }),
      City: ['', [Validators.required, Validators.minLength(2)]],
      Mobile: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      Password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
        ],
      ],
      PasswordConfirm: ['', [Validators.required]],
    },
    { validator: Validators.compose([passwordMatch, numberValidator]) }
  );

  errorMsg: string = '';
  onSubmit() {
    let currentUrl: string = this.router.url;
    this.signupForm.markAllAsTouched();
    this.signupForm.valid &&
      this.auth.userSignUp(this.signupForm.value, currentUrl).subscribe(
        (res) => {
          console.log(res);
          if (res.success) {
            localStorage.setItem('Token', res.user.Token);
            if (res.user.Role === 'admin') {
              this.router.navigate(['/admin']);
              localStorage.setItem('Role', 'admin');
            } else {
              localStorage.setItem('Role', 'user');
              this.router.navigate(['/user/home']);
            }
          } else {
            this.errorMsg = res.errorMessage;
          }
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
