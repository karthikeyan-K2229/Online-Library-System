import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private Logout: LoginService) { }

  ngOnInit(): void {
  }
logout()
{
  this.Logout.Logout();
}
}
