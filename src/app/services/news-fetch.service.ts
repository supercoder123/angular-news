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
  public sourcesUrl = `https://newsapi.org/v2/sources?apiKey=${this.apiKey}`;

  constructor(private http:HttpClient) { }

  getTopHeadlines(){
    return this.http.get(this.headlineUrl);
  }

  getSources(){
    return this.http.get(this.sourcesUrl);
  }

}
