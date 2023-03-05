import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Addbook } from '../addbook';
import { BookService } from '../book.service';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {

  books: Addbook[];
  addonupdate: Addbook;
  constructor(private bookservice : BookService,private router: Router) { }

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
edit(id:number)
{
  this.router.navigate(['editbook',id])
}

deletebook(id:number)
{
  this.bookservice.deletebook(id).subscribe((data:any)=>
  {
    alert("deleted sucessfully");
    this.getBooks();
  });
}
}
