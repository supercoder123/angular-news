import { Component } from '@angular/core';
import { NewsFetchService } from './services/news-fetch.service'
import { News } from './news';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'news-app';
  public sources:News[];

  constructor(private newsList:NewsFetchService) { }

  ngOnInit() {
    this.showSources();
  }

  //fetch news sources for sidebar
  showSources(){
    this.newsList.getSources().subscribe(data => {
      this.sources = data['sources'];
      console.log(this.sources);
    },err =>{
      console.log(err);
    });
  }
}
