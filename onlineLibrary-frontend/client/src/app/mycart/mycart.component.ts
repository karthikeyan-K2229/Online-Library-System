import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {
cart:any;
name:any;
present:boolean=false;
  constructor(private _loginService : LoginService,private bookservice : BookService, ) { }

  ngOnInit(): void {
this.getAllCart();
    this.name=this._loginService.User.name;
  }

 getAllCart()
 {
  this.bookservice.getcartbyId(this._loginService.User.id).subscribe((data)=>
  {
    this.cart=data;
    console.log(data);
    if(data.length>0){
    this.present=true;}
    
  })
 }

 deletecart(id:number)
{
  this.bookservice.deletecart(id).subscribe((data)=>
  {
    alert("Removed sucessfully");
    window.location.reload();
    this.getAllCart();
  });
}
}
