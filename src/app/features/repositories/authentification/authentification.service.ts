import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { endpoints } from 'src/app/core/util/endpoints';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  path: string = environment.api;
  endpoints = endpoints;
  constructor(private httpClient:HttpClient) { }
  login(request:any):Observable<any>{
    return this.httpClient.post("https://djou-market.herokuapp.com/authenticate",request);
  }
  register(request:any):Observable<any>{
   return  this.httpClient.post("https://djou-market.herokuapp.com/api/register",request);
  }
}
