import { Component,Input } from '@angular/core';
import { AdminTableBook } from 'src/app/shared/interfaces/admin-table-book';

@Component({
  selector: 'app-book-table-row',
  templateUrl: './book-table-row.component.html',
  styleUrls: ['./book-table-row.component.scss']
})
export class BookTableRowComponent {
@Input() book:AdminTableBook={
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
  Status: 0
};
}
