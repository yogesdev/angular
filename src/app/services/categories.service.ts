import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  httpcall;
  base_url = 'http://localhost:8080';
  categoryUrl = this.base_url+'/api/category/category';
  subcategoryUrl = this.base_url+'/api/category/subCategories';
  constructor(private httpClient: HttpClient) { }

 
  getCategories(data){   
   // console.log(environment);
    this.httpcall= this.httpClient.post(this.categoryUrl,data);
    return this.httpcall;    
  }

  getsubCategories(data){
    this.httpcall  ='';
    this.httpcall= this.httpClient.post(this.subcategoryUrl,data);
    return this.httpcall;    
  }
}
