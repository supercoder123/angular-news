import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsListComponent } from './components/news-list/news-list.component';
import { ArticleComponent } from './components/article/article.component';

const routes: Routes = [
  {
    path:'',
    component:NewsListComponent
  },
  {
    path:':sourceId',
    component:NewsListComponent
  },
  {
    path:'article',
    component:ArticleComponent
  },
  {
    path:'**',
    component:NewsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
