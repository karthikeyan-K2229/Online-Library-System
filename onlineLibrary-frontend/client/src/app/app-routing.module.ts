import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { AdminFeedbackComponent } from './admin-feedback/admin-feedback.component';
import { AdminGuard } from './admin.guard';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { EditbookComponent } from './editbook/editbook.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LoginComponent } from './login/login.component';
import { MycartComponent } from './mycart/mycart.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { UserguardGuard } from './userguard.guard';
import { UserhomepageComponent } from './userhomepage/userhomepage.component';
import { ViewbookComponent } from './viewbook/viewbook.component';
import { ViewuserComponent } from './viewuser/viewuser.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'admindashboard', component:AdmindashboardComponent,canActivate:[AdminGuard]},
  {path:'register',component:RegisterComponent},
  {path:'addbook',component:AddbookComponent,canActivate:[AdminGuard]},
  {path: 'viewuser',component:ViewuserComponent,canActivate:[AdminGuard]},
  {path: 'viewbook',component:ViewbookComponent,canActivate:[AdminGuard]},
  {path: 'updatebook',component:UpdatebookComponent,canActivate:[AdminGuard]},
  {path: 'FeedBack',component:AdminFeedbackComponent,canActivate:[AdminGuard]},
  {path: 'profile',component:ProfileComponent},
  {path: 'userhome',component:UserhomepageComponent,canActivate:[UserguardGuard]},
  {path:'userfeedback',component:FeedbackComponent,canActivate:[UserguardGuard]},
  {path:'editbook/:id',component:EditbookComponent},
  {path:'mycart',component:MycartComponent,canActivate:[UserguardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
