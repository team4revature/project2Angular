import { Component, OnInit, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-board-item',
  templateUrl: './board-item.component.html',
  styleUrls: ['./board-item.component.css']
})


export class BoardItemComponent implements OnInit {
  @Input()bName;
  constructor() {
    this.bName = 'Create new board.';
  }

  ngOnInit() {
  }

}
