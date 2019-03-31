import { Component, OnInit, Input } from '@angular/core';
import { NewsFetchService } from '../../services/news-fetch.service'
import { News } from '../../news';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  constructor(private newsList:NewsFetchService) { }

  @Input() sourceName : News[];

  public newsItems:News[];

  ngOnInit() {
    this.showTopHeadlines();
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
