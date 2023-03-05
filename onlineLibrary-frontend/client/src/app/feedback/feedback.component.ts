import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Feedback } from '../feedback';
import { LoginService } from '../login.service';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  
  successMessage:string;
  errorMessage:string;
  Addsfood: any;
 
  constructor(private _loginService : LoginService,private router:Router,private registerService: RegisterService, private formBuilder: FormBuilder,) { }
  
  ngOnInit(): void {
    this.forms();
  }
  AddTheme()
  {
    console.log(this.Addsfood.value);
    this.registerService.sentFeedBack(this.Addsfood.value).subscribe(data=>{
      alert("Feedback Added Successfully")
      this.Addsfood.reset();    
  },error=>alert("Something went wrong"));
    }


  forms()
  {
    this.Addsfood = this.formBuilder.group({
      name:[{value:this._loginService.User.name,disabled:true},[Validators.required,Validators.pattern("^[a-zA-Z-]*")]],
      rating:['',[Validators.required]],
      feedback:['']
      
    })
  }
  
 }