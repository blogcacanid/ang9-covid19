import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NasionalService {
  private urlSum = 'https://api.kawalcorona.com/indonesia/';
  private urlDtl = 'https://api.kawalcorona.com/indonesia/provinsi/';
  constructor(private httpClient: HttpClient) { }
  getSummaries(){
    return this.httpClient.get(this.urlSum);
  }
  getDetails(){
    return this.httpClient.get(this.urlDtl);
  }
}