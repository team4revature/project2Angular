import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { BoardListService } from '../../services/board-list-service.service';
=======
import { BoardListServiceService } from '../../services/board-list-service.service';
>>>>>>> a02fafcb26d2f7a1ba6891dc1e8415edf6aece0b
import { BoardItemComponent } from '../board-item/board-item.component';


@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css']
})
export class BoardListComponent implements OnInit {

  public  boards = [];
  constructor(private _boardListService: BoardListService) {}

  ngOnInit() {
    this.boards = this._boardListService.getBoardListByUser();
    console.log(this.boards);
  }

}
