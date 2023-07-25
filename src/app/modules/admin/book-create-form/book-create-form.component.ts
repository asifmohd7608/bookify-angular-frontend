import { Component } from '@angular/core';
import { UntypedFormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-book-create-form',
  templateUrl: './book-create-form.component.html',
  styleUrls: ['./book-create-form.component.scss']
})
export class BookCreateFormComponent  {

constructor(public ufb:UntypedFormBuilder){}

bookCreateForm=this.ufb.group({
  ISBN:['',Validators.required,Validators.maxLength(10),Validators.minLength(10)],
  Book_Title:['',Validators.required,Validators.maxLength(20)],
  Author:['',Validators.required,Validators.maxLength(20)],
  Publication_Year:['',Validators.required],
  Language:['',Validators.required,Validators.minLength(3)],
  No_Of_Copies_Actual:['',Validators.required,],
  No_Of_Copies_Current:['',Validators.required],
  Available:['1',Validators.required],
  Price:['',Validators.required],
  imageFile:['',Validators.required]
})

onSubmit(){
  console.log('submitted')
  console.log(this.bookCreateForm.value)
}

}
