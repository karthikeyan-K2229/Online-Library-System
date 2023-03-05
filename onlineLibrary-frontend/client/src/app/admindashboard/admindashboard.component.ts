import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookService } from '../book.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
  name='Admin';
  Books : Observable<any[]> | undefined;
  users: Observable<any[]> | undefined;
  constructor(private service : BookService) { }

  ngOnInit(): void {
 this.getAllbook();
 this.getAlluser();
 
  }
  getAllbook()
  {
    this.Books=this.service.getAllBooks();
    console.log(this.Books)
    console.log("k")
  }
  getAlluser()
  {
    this.users=this.service.getAllusers();
  }

}
