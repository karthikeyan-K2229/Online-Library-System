import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { Router } from '@angular/router';
import { UserStorage } from './userStorage';
//import { LoginRequestPayload } from './login/login-request.payload';
import { environment } from 'src/environments/environment';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private httpClient: HttpClient, private _router : Router) { }
  private _user:UserStorage;
  get User()
  {
    if(this._user==null)
    {
      this.ReadUserFromStorage();
    }
    return this._user;
  }

  public LoginUser(user:User) :Observable<object>
  {
    console.log(user);
    return this.httpClient.post(`${API}/login`,user);
  }

  public SetUser(user)
  {
    this._user=user;
    this.SetUserLocalStorage();
  }
 
  private SetUserLocalStorage()
  {
    localStorage.setItem('user', JSON.stringify(this._user));
  }

  public ReadUserFromStorage()
  {
      let data=localStorage.getItem('user');
      if(data!=null)
      {
        let jdn=JSON.parse(data);
        this._user=<UserStorage>jdn;
      }
  }

  public Logout()
  {
    this._user=null;
    localStorage.removeItem('user');
   
    this._router.navigate(['/login']);
  }


}
