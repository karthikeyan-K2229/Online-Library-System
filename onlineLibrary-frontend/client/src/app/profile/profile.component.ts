 import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { RegisterService } from '../register.service';
import { User } from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
id:any;
user:any;
  constructor(private registerService: RegisterService,private _loginService : LoginService,) { }

  ngOnInit(): void {
   this.id=this._loginService.User.id;
    this.getbyid();
    
  }
  getbyid()
  {
    this.registerService.getById(this.id).subscribe(data=>{
      this.user=data;
      console.log(this.user.name);
    })
  }
  
}
