import { Component, OnInit } from '@angular/core';
import { Addbook } from '../addbook';
import { BookService } from '../book.service';

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent implements OnInit {
books: Addbook[];
  constructor(private bookservice : BookService,) { }

  ngOnInit(): void {
    this.getBooks();
  }
  public getBooks()
  {
    this.bookservice.getAllBook().subscribe(data=>
      {
        this.books=data;
      })
  }
}
