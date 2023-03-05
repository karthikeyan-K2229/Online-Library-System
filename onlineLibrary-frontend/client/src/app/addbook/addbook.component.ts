import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Addbook } from '../addbook';
import { LoginService } from '../login.service';
import { BookService } from '../book.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  AddBooks: any;
  users!: Addbook[] ;
  

  constructor(private bookservice : BookService ,private _loginService : LoginService,
    private router: Router,private formBuilder: FormBuilder
    ) {this.forms(); }

  ngOnInit(): void { 
    
  }
  forms()
  {
    this.AddBooks = this.formBuilder.group({
      bookname:['',[Validators.required]],
      imageurl:['',[Validators.required]],
      author:['',[Validators.required]],
      website:['',[Validators.required]],
    })
  }
  Add()
  {
    console.log(this.AddBooks.value);
    this.bookservice.AddingBook(this.AddBooks.value).subscribe(data=>{
      alert("Book Added Successfully")
      this.AddBooks.reset();
      this.router.navigate(['/viewbook']);

    
  },error=>alert(" name already exits "));
    }

    logout()
    {
      this._loginService.Logout();
    }

}
