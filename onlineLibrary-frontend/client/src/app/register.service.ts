import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { environment } from 'src/environments/environment';
import { Feedback } from './feedback';

const API = environment.apiURL;
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  
  constructor(private httpClient: HttpClient)
  {  
  
  }

 public registerUser(user: User) :Observable<object>
  {
    console.log(user);
    return this.httpClient.post(`${API}/register`,user);
  }
  public getAllUsers() : Observable<any>
  {
    return this.httpClient.get<any>(`${API}/getAllUsers`);
  }

  sentFeedBack(feedback:Feedback):Observable<Object>
 {
  console.log(feedback);
  return this.httpClient.post<any>(`${API}/feedback`,feedback);
 }

 public getFeedback(): Observable<Feedback[]>{
  return this.httpClient.get<Feedback[]>(`${API}/allFeedBack`);
}
getById(id:number): Observable<Object>
{
  console.log(id)
  return this.httpClient.get<any>(`${API}/user/`+id);
}
deletebook(id:number): Observable<Object>
{
  return this.httpClient.delete(`${API}/deletebook/`+id);
}
deletefeedback(id:number): Observable<Object>
{
  return this.httpClient.delete(`${API}/deletefeedback/`+id);
}
deleteUser(id:number): Observable<Object>
{
  return this.httpClient.delete(`${API}/delete/`+id);
}
}
