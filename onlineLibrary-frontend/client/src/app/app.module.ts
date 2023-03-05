import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddbookComponent } from './addbook/addbook.component';
import { ViewbookComponent } from './viewbook/viewbook.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { AdminFeedbackComponent } from './admin-feedback/admin-feedback.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ProfileComponent } from './profile/profile.component';
import { UserhomepageComponent } from './userhomepage/userhomepage.component';
import { EditbookComponent } from './editbook/editbook.component';
import { MycartComponent } from './mycart/mycart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    AdmindashboardComponent,
    AddbookComponent,
    ViewbookComponent,
    ViewuserComponent,
    AdminFeedbackComponent,
    UpdatebookComponent,
    FeedbackComponent,
    ProfileComponent,
    UserhomepageComponent,
    EditbookComponent,
    MycartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
