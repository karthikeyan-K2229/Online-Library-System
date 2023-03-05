import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-admin-feedback',
  templateUrl: './admin-feedback.component.html',
  styleUrls: ['./admin-feedback.component.css']
})
export class AdminFeedbackComponent implements OnInit {

  feedback:any;
  present:boolean=false;
  constructor(private registerService: RegisterService ) { }

  ngOnInit(): void {
    this.getFeedback();

  }
  getFeedback(){
    this.registerService.getFeedback().subscribe(
      (data)=>{
        this.feedback=data;
        console.log(this.feedback);
        if(data.length>0){
          this.present=true;}
      }
    )
  }
  deletebook(id:number)
{
  this.registerService.deletefeedback(id).subscribe((data:any)=>
  {
    alert("deleted sucessfully");
    this.getFeedback();

  });
}

}
