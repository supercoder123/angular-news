import { Injectable } from '@angular/core';
import {News} from '../news';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsFetchService {
  private apiKey = environment.apiKey;
  public  headlineUrl = `https://newsapi.org/v2/top-headlines?apiKey=${this.apiKey}&country=in`; 
  public sourcesUrl = `https://newsapi.org/v2/sources?apiKey=${this.apiKey}&language=en`;
  public singleSourceUrl;
  constructor(private http:HttpClient) { }

  getTopHeadlines(source=""){
    return this.http.get(this.headlineUrl);
  }

  getSources(){
    return this.http.get(this.sourcesUrl);
  }

  getHeadlinesSingleSource(source){
    this.singleSourceUrl = `https://newsapi.org/v2/top-headlines?apiKey=${this.apiKey}&sources=${source}`;
    return this.http.get(this.singleSourceUrl);
  }
}
