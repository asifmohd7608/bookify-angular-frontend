import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCreateFormComponent } from './book-create-form.component';

describe('BookCreateFormComponent', () => {
  let component: BookCreateFormComponent;
  let fixture: ComponentFixture<BookCreateFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookCreateFormComponent]
    });
    fixture = TestBed.createComponent(BookCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
