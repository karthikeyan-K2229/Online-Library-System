import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import {UserStorage} from '../userStorage'

//import { LoginRequestPayload } from './login-request.payload';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: any;
   msg="";
  role:string="";
  user:User
  submitted:boolean=false;
  
  

  
  constructor(private loginService: LoginService,
    private _router : Router,
    private formBuilder: FormBuilder
    ) {
      this.forms();
   }

  ngOnInit(): void {
  }

   forms(){
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.minLength(8),Validators.maxLength(16), Validators.required]],
    });
  }
  
  
  userLogin(){
    this.submitted = true;
    if (this.loginForm.invalid) {
      alert("Enter all details");
      return;
    }
    console.log(this.loginForm.value);
    
     this.loginService.LoginUser(this.loginForm.value).subscribe((response:any)=>{
       console.log(response," data ");
        localStorage.setItem('usertype',response.usertype);
       
        localStorage.setItem('id',response.id)
        
       let user:UserStorage={
         name: response["name"],
         usertype: response["usertype"],
         id:response["id"],
         email:response["email"]
       }
     
       this.loginService.SetUser(user);
    


      if(response.usertype=="User")
      {
        
        this._router.navigate(['/userhome']);
      }
      else{
       
        this._router.navigate(['/admindashboard']);
      }

    //}
         },
         (error:{error:any;})=>{
         console.log(error.error);
         this.msg="Invalid credentials";
        
         alert("invalid credentials");
         error=>alert("invalid credentials");
         })
     }
}
