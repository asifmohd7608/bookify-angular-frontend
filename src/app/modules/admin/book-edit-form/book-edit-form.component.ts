import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookApiService } from 'src/app/core/services/book-api.service';
import { Category } from 'src/app/shared/interfaces/category';
import {
  stockValidator,
  availableValidator,
  isbnValidator,
  publicationDate,
} from 'src/app/shared/Validators/bookFormValidator';

@Component({
  selector: 'app-book-edit-form',
  templateUrl: './book-edit-form.component.html',
  styleUrls: ['./book-edit-form.component.scss'],
})
export class BookEditFormComponent implements OnInit {
  constructor(
    public ufb: UntypedFormBuilder,
    private http: BookApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  id: string | null = '';
  categories: Category[] = [];

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });

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

    this.http.getBookById(this.id).subscribe(
      (res) => {
        if (res.success) {
          Object.keys(this.bookEditForm.value).forEach((key) => {
            if (key === 'Available' || key === 'Status') {
              this.bookEditForm.get(key)?.setValue(res.data[key].toString());
            } else {
              this.bookEditForm.get(key)?.setValue(res.data[key]);
            }
          });
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  bookEditForm = this.ufb.group(
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
      Available: [null, [Validators.required]],
      Status: [null, [Validators.required]],
      Price: [null, [Validators.required]],
      imageFile: [null],
    },
    {
      validator: Validators.compose([
        stockValidator,
        availableValidator,
        isbnValidator,
        publicationDate,
      ]),
    }
  );
  // ,{Validator:Validators.compose([matchPassword,stockValidator])}
  onImageChange(event: any) {
    let file: File = event.target?.files[0];
    // console.log(file)
    if (file) {
      this.bookEditForm.get('imageFile')?.setValue(file);
    }
  }

  onSubmit() {
    this.bookEditForm.markAllAsTouched();
    let formData = new FormData();
    Object.keys(this.bookEditForm.value).forEach((key) => {
      formData.append(key, this.bookEditForm.get(key)?.value);
    });

    this.bookEditForm.valid &&
      this.http.editBook(formData, this.id).subscribe(
        (res: any) => {
          if (!res.success) {
          } else {
            this.router.navigate(['admin']);
          }
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
