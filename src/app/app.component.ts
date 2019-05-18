import { Component } from '@angular/core';
import { NewsFetchService } from './services/news-fetch.service'
import { News } from './news';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public sources:News[] = [];
  public sourceIdValue:string = "";
  public sourceNameValueToolbar:string = "";
  public newsListComponentRef;

  constructor( private newsList:NewsFetchService ) { 
    }

  ngOnInit() {
    this.showSources();
  }

  //get child component reference on route activation
  onRouteActivation(event){
    this.newsListComponentRef = event;
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

  //get the source name string and id from sidebar
  setSourceValue(sourceId, sourceName){
    this.sourceIdValue = sourceId;
    this.sourceNameValueToolbar = sourceName;
    this.newsListComponentRef.getNewsBySource(sourceId);
    window.scrollTo(0,0);
  }

  //headlines for home screen
  getHeadlines(){
    this.newsListComponentRef.showTopHeadlines();
    this.sourceNameValueToolbar = "";
  }

  //random color for sidebar 
  getRandomColor(){
    return "#" + Math.random().toString(16).slice(2,8);
  }
}
