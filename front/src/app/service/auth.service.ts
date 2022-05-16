import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(user:any):Observable<any>{
     const apiUrl = "http://localhost:3000/user/login"
     return this.http.post<any>(apiUrl,user)
  }

  signup(users:User):Observable<User>{
    const Url="http://localhost:3000/user/inscrit_user"
    console.log(users)
    return this.http.post<User>(Url,users)
  }

}
