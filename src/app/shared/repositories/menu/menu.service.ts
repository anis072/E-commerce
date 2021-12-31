import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { endpoints } from 'src/app/core/util/endpoints';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private readonly httpClient:HttpClient) { }
  path: string = environment.api;
  endpoints = endpoints;
  getMenues():any{
    return this.httpClient.post(this.path+endpoints.MENU,'')
  }
  getCategoriesById(id:number):any{
    return this.httpClient.post(this.path+endpoints.CATEGORYBYID+id+'/category','')
  }
  getProduct(id:number):any{
    return this.httpClient.post(this.path+endpoints.product+id+'/product','')
  }
}
