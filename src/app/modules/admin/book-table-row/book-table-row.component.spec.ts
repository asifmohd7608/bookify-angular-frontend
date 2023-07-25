import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTableRowComponent } from './book-table-row.component';

describe('BookTableRowComponent', () => {
  let component: BookTableRowComponent;
  let fixture: ComponentFixture<BookTableRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookTableRowComponent]
    });
    fixture = TestBed.createComponent(BookTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
