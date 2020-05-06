import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InternasionalService {
  private urlSumConfirmed = 'https://api.kawalcorona.com/positif/';
  private urlSumRecovered = 'https://api.kawalcorona.com/sembuh/';
  private urlSumDeaths = 'https://api.kawalcorona.com/meninggal/';
  private urlDtl = 'https://api.kawalcorona.com/';
  constructor(private httpClient: HttpClient) { }
  getSumConfirmed(){
    return this.httpClient.get(this.urlSumConfirmed);
  }
  getSumRecovered(){
    return this.httpClient.get(this.urlSumRecovered);
  }
  getSumDeaths(){
    return this.httpClient.get(this.urlSumDeaths);
  }
  getDetails(){
    return this.httpClient.get(this.urlDtl);
  }
}