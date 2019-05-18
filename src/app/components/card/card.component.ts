import { Component, OnInit, Input } from '@angular/core';
import {News} from '../../news';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() post : News[];

  constructor() { }

  openDetailedView(){
    console.log("click click click ");
    
  }

  ngOnInit() {
  }

}
