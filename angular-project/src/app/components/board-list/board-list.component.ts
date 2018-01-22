import { Component, OnInit } from '@angular/core';
import { BoardListServiceService } from '../services/board-list-service.service';
import { BoardItemComponent } from '../board-item/board-item.component';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css']
})
export class BoardListComponent implements OnInit {

  public  boards = [];
  constructor(private _boardListService: BoardListServiceService) {}

  ngOnInit() {
    this.boards = this._boardListService.getBoardListByUser();
    console.log(this.boards);
  }

}
