import { Component, OnInit } from '@angular/core';
import { NewsFetchService } from '../../services/news-fetch.service'
import { News } from '../../news';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  constructor(private newsList:NewsFetchService) { }

  public headlines:News[];

  ngOnInit() {
    this.showTopHeadlines();
  }

  showTopHeadlines(){
    this.newsList.getTopHeadlines().subscribe(data => {
      this.headlines = data['articles'];
      console.log(this.headlines);
    },err =>{
      console.log(err);
    });
  }



}
