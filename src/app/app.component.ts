import { Component, ViewChild } from '@angular/core';
import { NewsFetchService } from './services/news-fetch.service'
import { News } from './news';
import { NewsListComponent } from './components/news-list/news-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'news-app';
  public sources:News[] = [];
  public sourceNameValue:string = "";
  @ViewChild(NewsListComponent) newsListChild:NewsListComponent;

  constructor(private newsList:NewsFetchService) { }

  ngOnInit() {
    this.showSources();
  }

  //fetch news sources for sidebar
  showSources(){
    this.newsList.getSources().subscribe(data => {
      this.sources = data['sources'].slice();
      console.log("original source",this.sources);

      this.sources.forEach((element) => {
          element['color'] = this.getRandomColor();
      });

    },err =>{
      console.log(err);
    });
  }

  setSourceValue(value){
    this.sourceNameValue = value;
    this.newsListChild.getNewsBySource(value);
  }

  getRandomColor(){
    return "#" + Math.random().toString(16).slice(2,8);
  }
}
