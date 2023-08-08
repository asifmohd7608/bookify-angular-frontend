import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.scss'],
})
export class ProfileDataComponent implements OnInit {
  constructor(public userApi: UserService) {}
  userData: User = {} as User;
  ngOnInit(): void {
    this.userApi.getUserDetails().subscribe((res) => {
      this.userData = res.data;
    });
  }
}
