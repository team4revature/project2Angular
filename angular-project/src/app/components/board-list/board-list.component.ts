import { Component, OnInit } from '@angular/core';
import { BoardListService } from '../../services/board-list-service.service';
import { BoardItemComponent } from '../board-item/board-item.component';
import { User } from '../../models/user.model';
import { Board } from '../../models/board.model';
import { RequestOptions, RequestMethod, Http, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http/src/module';
import { Headers } from '@angular/http/src/headers';

import { UserService } from '../../services/user.service';
import { UserListServiceService } from '../../services/user-list-service.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  observe: 'response' as 'response'
};

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css']
})
export class BoardListComponent implements OnInit {
  userDTO: any;
  apiURL: any;

  public  boards: Board[];
  public user: User;
  public bIn: string;
  
  constructor(private _boardListService: BoardListService, public http: HttpClient, private _userListService: UserListServiceService ) {}

  ngOnInit() {
  this._boardListService.getBoardListByUser().subscribe(data => this.boards=data);
    console.log(this.boards);
   this._userListService.getUser().subscribe(data=> this.user=data);
    console.log(this.user);
    
      
  }

  
  createBoard(){
    let boardD = new Board(null,this.bIn, null, this.user, null, null);
    console.log(this.user);
    console.log(this.boards);
    //console.log(boardD);
    this.user.boards.push(boardD);
    let s: string = this.circular(boardD);
    //console.log('boardL ' + s);
    let surl: string = 'http://localhost:80/api/v1/createBoard';
   this.http.post(surl,s,httpOptions ).subscribe();
   //console.log(this.user);
  }

  circular(v) {
    const cache = new Map();
    return JSON.stringify(v, function (key, value) {
      if (typeof value === 'object' && value !== null) {
        if (cache.get(value)) {
          // Circular reference found, discard key
          return;
        }
        // Store value in our collection
        cache.set(value, true);
      }
      return value;
    });
  };

}
