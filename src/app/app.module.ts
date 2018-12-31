import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NewsFetchService } from './services/news-fetch.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule }  from './material-components/material-components.module';
import { CardListComponent } from './components/card-list/card-list.component'

@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    CardListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [NewsFetchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
