import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
//import { BoardListServiceService } from '../components/board-list-service.service';
=======
import { BoardListService } from '../../services/board-list-service.service';
>>>>>>> 137d63ddb6ebe5664aa22e01cf94bd81f7b34ae8
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
