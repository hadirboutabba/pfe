import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { jobOpp } from '../model/jobOpp';

@Injectable({
  providedIn: 'root'
})
export class CrudjobService {

  constructor(private http: HttpClient) { }

  
  ajout(user:any):Observable<any>{
    const apiUrl = "http://localhost:3000/job/add"
    return this.http.post<any>(apiUrl,user)
 }

 modify(opp:jobOpp):Observable<jobOpp>{
   const Url="http://localhost:3000/job/modify"
   console.log(opp)
   return this.http.post<jobOpp>(Url,opp)
 }
 delete(users:jobOpp):Observable<jobOpp>{
  const Url="http://localhost:3000/job/delete"
  console.log(users)
  return this.http.post<jobOpp>(Url,users)
}
}
