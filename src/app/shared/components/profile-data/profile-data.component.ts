import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { User } from '../../interfaces/user';
import { UntypedFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.scss'],
})
export class ProfileDataComponent implements OnInit {
  constructor(public userApi: UserService, public ufb: UntypedFormBuilder) {}

  userData: User = {} as User;
  isModalOpen: boolean = false;

  ngOnInit(): void {
    this.userApi.getUserDetails().subscribe((res) => {
      this.userData = res.data;
    });
  }

  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }
  closeModal() {
    this.isModalOpen = false;
  }
  picForm = this.ufb.group({
    imageFile: [null, [Validators.required]],
  });

  onImageChange(event: any) {
    let file: File = event.target?.files[0];
    if (file) {
      this.picForm.get('imageFile')?.setValue(file);
    }
  }

  uploadPic() {
    this.picForm.markAllAsTouched;
    let formdata = new FormData();
    formdata.append('imageFile', this.picForm.get('imageFile')?.value);
    this.picForm.valid &&
      this.userApi.changePic(formdata).subscribe((res) => {
        if (res.success) {
          this.userData = res.data;
          this.picForm.get('imageFile')?.setValue(null);
          this.picForm.get('imageFile')?.markAsPristine;
          this.closeModal();
        }
      });
  }
}
