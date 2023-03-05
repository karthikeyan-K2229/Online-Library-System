import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Addbook } from './addbook';
import { environment } from 'src/environments/environment';
import { Mycart } from './mycart';

const API = environment.apiURL;
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { }
  AddingBook(addtheme : Addbook ) :Observable<Object>
  {
    console.log(addtheme);
    return this.httpClient.post<any>(`${API}/addbook`,addtheme);
  }
  getAllBook(): Observable<Addbook[]>
  {
    return this.httpClient.get<Addbook[]>(`${API}/getBook`)
  }
  updatebook(addbook:Addbook,id:number)
  {
    return this.httpClient.put(`${API}/editBook/`+id,addbook);
  }
  deletebook(id:number): Observable<Object>
  {
    return this.httpClient.delete(`${API}/deletebook/`+id);
  }
  getAllBooks(): Observable<any[]> | undefined
  {
    console.log("k")
    return this.httpClient.get<any>(`${API}/getTotalBooks`);
  }
getAllusers(): Observable<any[]> | undefined
  {

    return this.httpClient.get<any>(`${API}/getTotalusers`);
  }
  
  getBookById(id:number): Observable<Addbook>{
    return this.httpClient.get<Addbook>(`${API}/getbookbyid/`+id);
  }

  addtoCart(cart:Mycart): Observable<any>
  {
    return this.httpClient.post<Mycart>(`${API}/addtocart`,cart);
  }
   getcartbyId(userid:number): Observable<any>
   {
    return this.httpClient.get<Mycart>(`${API}/getcartbyid/`+userid);

   }
   deletecart(id:number): Observable<any>
   {
    return this.httpClient.delete(`${API}/deletecart/`+id);
   }
}
