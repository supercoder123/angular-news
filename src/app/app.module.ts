import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NewsFetchService } from './services/news-fetch.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule }  from './material-components/material-components.module';
import { CardComponent } from './components/card/card.component';
import { ArticleComponent } from './components/article/article.component'
import { AppService } from './services/app-service.service';

@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    CardComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [NewsFetchService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
