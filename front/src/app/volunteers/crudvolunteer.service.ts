import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VolunteerOpp } from '../model/volunteerOpp';

@Injectable({
  providedIn: 'root'
})
export class CrudvolunteerService {

  constructor(private http: HttpClient) { }

  
  ajout(user:any):Observable<any>{
    const apiUrl = "http://localhost:3000/volunteer/add"
    return this.http.post<any>(apiUrl,user)
 }

 modify(opp:VolunteerOpp):Observable<VolunteerOpp>{
   const Url="http://localhost:3000/volunteerOpp/modify"
   console.log(opp)
   return this.http.post<VolunteerOpp>(Url,opp)
 }
 delete(users:VolunteerOpp):Observable<VolunteerOpp>{
  const Url="http://localhost:3000/volunteerOpp/delete"
  console.log(users)
  return this.http.post<VolunteerOpp>(Url,users)
}
}
