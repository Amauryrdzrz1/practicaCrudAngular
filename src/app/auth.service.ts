import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod'
import { Id } from './id';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiURL = environment.apiURL;
  constructor(private http:HttpClient) { }
  httpHeaders = new HttpHeaders({
    'Access-Control-Allow-Origin': 'http://127.0.0.1:3333/',
    'Access-Control-Allow-Methods': 'POST,GET,DELETE'
  });

  register(user:User):Observable<any>{

    return this.http.post(`${this.apiURL}users`, user,{headers: this.httpHeaders});
  }

  login(user:User):Observable<any>{
    return this.http.post(`${this.apiURL}login`, user);
  }

}
