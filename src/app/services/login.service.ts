import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  httpcall:any;
  base_url = 'http://localhost:8080/api/';
  login= this.base_url+'login/login';
   
  loginAdmin(data:any){    
    this.httpcall= this.httpClient.post(this.login,data);
    return this.httpcall;    
  }
   
}
