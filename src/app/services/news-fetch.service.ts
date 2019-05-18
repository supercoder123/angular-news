import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsFetchService {
  private apiKey = environment.apiKey;
  public  headlineUrl = `https://newsapi.org/v2/top-headlines?apiKey=${this.apiKey}&country=in`; 
  public sourcesUrl = `https://newsapi.org/v2/sources?apiKey=${this.apiKey}&language=en`;
  public singleSourceUrl = `https://newsapi.org/v2/top-headlines?apiKey=${this.apiKey}&sources=`;
  
  constructor(private http:HttpClient) { }

  //get India's topHeadlines to show on home page
  getTopHeadlines(source=""){
    return this.http.get(this.headlineUrl);
  }

  //get all sources to populate sidebar
  getSources(){
    return this.http.get(this.sourcesUrl);
  }

  //get headlines list for single source :: from sidebar list
  getHeadlinesSingleSource(source){
    let singleSourceFinalUrl = this.singleSourceUrl + `${source}`;
    return this.http.get(singleSourceFinalUrl);
  }
}
