import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';
import { numberValidator } from '../../Validators/authFormValidator';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss'],
})
export class ProfileEditComponent implements OnInit {
  constructor(public userApi: UserService, public ufb: UntypedFormBuilder) {}

  userData: User = {} as User;
  @Output() editAction = new EventEmitter();

  ngOnInit(): void {
    this.userApi.getUserDetails().subscribe((res) => {
      if (res.success) {
        Object.keys(this.profileForm.value).forEach((key) => {
          if (key === 'Address') {
            this.profileForm.get(key)?.setValue({
              Address_line1: res.data['Address_line1'],
              Address_line2: res.data['Address_line2'],
              Address_line3: res.data['Address_line3'],
            });
          } else {
            this.profileForm.get(key)?.setValue(res.data[key]);
          }
        });
      }
    });
  }
  profileForm = this.ufb.group(
    {
      Email: ['', [Validators.required, Validators.email]],
      First_Name: ['', [Validators.required, Validators.minLength(2)]],
      Last_Name: ['', [Validators.required, Validators.minLength(2)]],
      Address: this.ufb.group({
        Address_line1: ['', [Validators.required, Validators.minLength(2)]],
        Address_line2: ['', [Validators.required, Validators.minLength(2)]],
        Address_line3: ['', [Validators.required, Validators.minLength(2)]],
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
    },
    { validator: Validators.compose([numberValidator]) }
  );

  submitForm() {
    this.profileForm.markAllAsTouched;
    console.log(this.profileForm.value);
    this.userApi.updateProfile(this.profileForm.value).subscribe((res) => {
      if (res.success) {
        this.editAction.emit();
      }
    });
  }
  emitEditAction() {
    this.editAction.emit();
  }
}
