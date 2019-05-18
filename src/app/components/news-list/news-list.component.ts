import { Component, OnInit, Input } from '@angular/core';
import { NewsFetchService } from '../../services/news-fetch.service'
import { News } from '../../news';
import { AppService } from 'src/app/services/app-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  public newsItems:News[];
  public sourceFromRoute;

  constructor(
    private newsList:NewsFetchService,
    private activeRoute:ActivatedRoute
    ){
      this.activeRoute.params.subscribe(routeParams => {
        this.sourceFromRoute = routeParams.sourceId;
      });     
    }

  ngOnInit() {
    this.sourceFromRoute ? this.getNewsBySource(this.sourceFromRoute) : this.showTopHeadlines();    
  }

  showTopHeadlines(){
    this.newsList.getTopHeadlines().subscribe(data => {
      this.newsItems = data['articles'];
      console.log(this.newsItems);
    },err =>{
      console.log(err);
    });
  }

  getNewsBySource(source){
    console.log("getNewsBySource");
    
    this.newsList.getHeadlinesSingleSource(source).subscribe(data => {
      this.newsItems = data['articles'];
      console.log(this.newsItems);
    },err =>{
      console.log(err);
    })
  }

}
