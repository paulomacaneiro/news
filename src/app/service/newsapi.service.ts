import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {
  topNews = 'https://newsapi.org/v2/top-headlines?country=br&language=pt&apiKey=c0ab29e16dac41e2a3af4f838b19f456';
  topNewsTech = 'https://newsapi.org/v2/top-headlines?country=br&language=pt&category=technology&apiKey=c0ab29e16dac41e2a3af4f838b19f456';
  constructor(private _http: HttpClient) { }
  topHeadlines(): Observable <any>{
    return this._http.get( this.topNews );
  }
  topHeadlinesTech(): Observable <any>{
    return this._http.get( this.topNewsTech );
  }
}
