import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterService } from '../register.service';
import { User } from '../user';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {
  users: User[];
  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
    this.getUsers();
  }
private getUsers()
{
  this.registerService.getAllUsers().subscribe(data=>
    {
      if(data["usertype"]!="Admin"){
      this.users=data;}
    })
}
deleteuser(id:number)
{
  this.registerService.deleteUser(id).subscribe((data:any)=>
  {
    alert("deleted sucessfully");
    this.getUsers();
  });
}
}
