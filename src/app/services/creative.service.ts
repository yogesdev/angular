import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreativeService {

  constructor(private httpClient: HttpClient) { }

  httpcall;
  base_url = 'http://localhost:8080/';
  addtext= this.base_url+'api/creative/addtextad';
  fetchcampign= this.base_url+'api/campaign/fetchCamapigns';

  addTextCreative(data)
  {
    this.httpcall= this.httpClient.post(this.addtext,data);
    return this.httpcall;    
  }
}
