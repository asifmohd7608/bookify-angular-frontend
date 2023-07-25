import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {
@Input() book={Book_Title:'',File_Path:'',Price:'',No_Of_Copies_Current:0};
ngOnInit(): void {
  
}
}
