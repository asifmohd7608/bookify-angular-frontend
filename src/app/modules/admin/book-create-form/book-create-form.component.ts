import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookApiService } from 'src/app/core/services/book-api.service';
import { Category } from 'src/app/shared/interfaces/category';
import {
  stockValidator,
  availableValidator,
  isbnValidator,
  publicationDate,
} from 'src/app/shared/Validators/bookFormValidator';

@Component({
  selector: 'app-book-create-form',
  templateUrl: './book-create-form.component.html',
  styleUrls: ['./book-create-form.component.scss'],
})
export class BookCreateFormComponent implements OnInit {
  constructor(
    public ufb: UntypedFormBuilder,
    private http: BookApiService,
    private router: Router
  ) {}

  categories: Category[] = [];

  ngOnInit(): void {
    this.http.getCategories().subscribe(
      (res) => {
        if (res.success) {
          this.categories = res.data;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  bookCreateForm = this.ufb.group(
    {
      ISBN: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      Book_Title: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
        ],
      ],
      Author: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
        ],
      ],
      Category_Type: ['2', [Validators.required]],
      Publication_Year: ['', [Validators.required]],
      Language: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
        ],
      ],
      No_Of_Copies_Actual: [null, [Validators.required]],
      No_Of_Copies_Current: [null, [Validators.required]],
      Available: ['1', [Validators.required]],
      Status: ['1', [Validators.required]],
      Price: [null, [Validators.required]],
      imageFile: [null, [Validators.required]],
    },
    {
      validator: Validators.compose([
        stockValidator,
        availableValidator,
        isbnValidator,
        ,publicationDate
      ]),
    }
  );
  // ,{Validator:Validators.compose([matchPassword,stockValidator])}
  onImageChange(event: any) {
    let file: File = event.target?.files[0];
    // console.log(file)
    if (file) {
      this.bookCreateForm.get('imageFile')?.setValue(file);
    }
  }

  onSubmit() {
    this.bookCreateForm.markAllAsTouched();
    let formData = new FormData();
    Object.keys(this.bookCreateForm.value).forEach((key) => {
      formData.append(key, this.bookCreateForm.get(key)?.value);
    });

    this.bookCreateForm.valid &&
      this.http.addBook(formData).subscribe(
        (res: any) => {
          if (!res.success) {
            console.log(res);
          } else {
            this.router.navigate(['admin']);
          }
        },
        (err) => {
          console.log(err);
        }
      );
    console.log(this.bookCreateForm);
  }
}
