import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Addbook } from '../addbook';
import { BookService } from '../book.service';

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit {
  id!: number;
  AddBooks: any;
  users: Addbook = new Addbook(); 
  constructor(private route: ActivatedRoute,
    private router: Router,private bookservice : BookService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.bookservice.getBookById(this.id).subscribe(data => {
      this.users = data;
      this.newforms();
    }, error => console.log(error));
  }
  forms()
  {
    this.AddBooks = this.formBuilder.group({
      bookname:[{value:'',disabled:true},[Validators.required]],
      imageurl:['',[Validators.required]],
      author:['',[Validators.required]],
      website:['',[Validators.required]],
    })
  }
newforms()
{
  this.AddBooks = this.formBuilder.group({
    bookname:[{value:this.users.bookname,disabled:true},[Validators.required]],
    imageurl:[this.users.imageurl,[Validators.required]],
    author:[{value:this.users.author,disabled:true},[Validators.required]],
    website:[this.users.website,[Validators.required]],
  })
}
update(){
  this.bookservice.updatebook(this.AddBooks.value,this.id).subscribe( data =>{
    this.goToList();
  },error=>alert("Something went wrong"))
 
}
goToList(){
  alert("updated successfully");
  this.router.navigate(['/updatebook']);
}

}
