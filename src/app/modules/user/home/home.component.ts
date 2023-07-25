import { Component, OnInit } from '@angular/core';
import { BookApiService } from 'src/app/core/services/book-api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
constructor(private bookApi:BookApiService){}
books:[]=[]
  ngOnInit(): void {
    this.bookApi.getBooks().subscribe((res)=>{
      if(res.success){
        this.books=res.data
      }
    },(error)=>{
      console.log(error)
    })


  }
}
