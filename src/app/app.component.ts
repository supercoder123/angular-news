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
  public sources:News[] = [];
  public sourceIdValue:string = "";
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

  setSourceValue(sourceId, sourceName){
    this.sourceIdValue = sourceId;
    this.sourceNameValue = sourceName;
    this.newsListChild.getNewsBySource(sourceId);
    window.scrollTo(0,0);
  }

  getHeadlines(){
    this.newsListChild.showTopHeadlines();
    this.sourceNameValue = "";
  }

  getRandomColor(){
    return "#" + Math.random().toString(16).slice(2,8);
  }
}
