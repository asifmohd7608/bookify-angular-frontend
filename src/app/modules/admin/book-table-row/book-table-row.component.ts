import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BookApiService } from 'src/app/core/services/book-api.service';
import { AdminTableBook } from 'src/app/shared/interfaces/admin-table-book';

@Component({
  selector: 'app-book-table-row',
  templateUrl: './book-table-row.component.html',
  styleUrls: ['./book-table-row.component.scss'],
})
export class BookTableRowComponent {
  constructor(public bookApi: BookApiService, public router: Router) {}

  @Input() book: AdminTableBook = {
    id: 0,
    ISBN: '',
    Book_Title: '',
    Author: '',
    Publication_Year: '',
    Language: '',
    No_Of_Copies_Actual: 0,
    No_Of_Copies_Current: 0,
    Available: 0,
    Price: 0,
    Category_Type: '',
    File_Path: '',
    Status: 0,
  };

  changeStatus(id: number) {
    this.bookApi.changeBookStatus(id).subscribe((res) => {
      console.log(res);
      if (res.success) {
        this.book.Status = res.data.status;
      }
    });
  }
  loadEditForm(id: number) {
    this.router.navigate([`/admin/book/edit/${id}`]);
  }
}
