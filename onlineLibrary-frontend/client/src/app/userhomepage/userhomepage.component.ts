import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Addbook } from '../addbook';
import { BookService } from '../book.service';
import { LoginService } from '../login.service';
import { Mycart } from '../mycart';

@Component({
  selector: 'app-userhomepage',
  templateUrl: './userhomepage.component.html',
  styleUrls: ['./userhomepage.component.css']
})
export class UserhomepageComponent implements OnInit {
  userid:any;
  likeduser :any;
  books: Addbook[];
  cart=new Mycart();
  constructor(private bookservice : BookService,private _loginService : LoginService ,private router: Router) { }

  ngOnInit(): void {
    this.userid=this._loginService.User.id;
    this.likeduser=this._loginService.User.name;
    
    this.getBooks();
  }
  public getBooks()
  {
    this.bookservice.getAllBook().subscribe(data=>
      {
        this.books=data;
      })
  }
  addtocart(book:Addbook)
  {
    this.cart.coursename=book.bookname;
    this.cart.courseid=book.id;
    this.cart.author=book.author;
    this.cart.imageurl=book.imageurl;
    this.cart.website=book.website;
    this.cart.likeduser=this.likeduser;
    this.cart.userid=this.userid;
    this.bookservice.addtoCart(this.cart).subscribe(
      data=>{
        console.log(this.cart);
        alert("Added To Cart Successfully");
        this.router.navigate(['mycart'])

      },
     error=>{
      console.log(error.error);
      alert("Failed to Added!!!!!!")
     }
      
    )
  };

}
