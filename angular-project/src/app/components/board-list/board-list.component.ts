import { Component, OnInit } from '@angular/core';
import { BoardListServiceService } from '../../services/board-list-service.service';
import { BoardItemComponent } from '../board-item/board-item.component';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css']
})
export class BoardListComponent implements OnInit {

  public  boards: User[];
  constructor(private _boardListService: BoardListServiceService) {}

  ngOnInit() {
    this._boardListService.getBoardListByUser().subscribe(
      data => console.log(this.boards = data['boards']));

  }
}
