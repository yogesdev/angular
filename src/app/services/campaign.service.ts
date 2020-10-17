import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  constructor(private httpClient: HttpClient) { }

  httpcall:any;
  
  base_url = 'http://localhost:8080/api/campaign/';
  addcampign= this.base_url+'addCampaign';
  fetchcampign= this.base_url+'fetchCampaigns';

  addCampaign(data){   
    this.httpcall= this.httpClient.post(this.addcampign,data);
    return this.httpcall;    
  }
  listCampaign(data){   
    this.httpcall= this.httpClient.post(this.fetchcampign,data);
    return this.httpcall;    
  }
}
