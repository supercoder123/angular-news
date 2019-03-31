import { Component, OnInit, Input } from '@angular/core';
import {News} from '../../news';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  @Input() post : News[];

  constructor() { }

  openDetailedView(){
    console.log("click click click ");
    
  }

  ngOnInit() {
  }

}