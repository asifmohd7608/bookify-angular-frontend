import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { User } from '../../interfaces/user';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { validityEndValidator } from '../../Validators/couponFormValidator';
import { numberValidator } from '../../Validators/authFormValidator';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  isEditEnabled: boolean = false;

  toggleEdit() {
    this.isEditEnabled = !this.isEditEnabled;
  }
}
