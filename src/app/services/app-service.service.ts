import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public sourceFromRoute;

  constructor( 
    private activeRoute:ActivatedRoute
    ) { }

    getSourceIdFromCurrentRoute(){
      this.activeRoute.params.subscribe(routeParams  => {
        this.sourceFromRoute = routeParams.sourceId;
      },() => {
        console.log(this.sourceFromRoute);
        
      }); 
    }

    // setSourceFromRoute(){
    //   this.getSourceIdFromCurrentRoute
    // }
}
