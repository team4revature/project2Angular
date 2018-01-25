import { Component, OnInit } from '@angular/core';
import { BoardListService } from '../../services/board-list-service.service';
import { BoardItemComponent } from '../board-item/board-item.component';
import { User } from '../../models/user.model';
import { Board } from '../../models/board.model';
import { RequestOptions, RequestMethod, Http, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http/src/module';
import { Headers } from '@angular/http/src/headers';

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
  
  constructor(private _boardListService: BoardListService, public http: HttpClient) {}

  ngOnInit() {
    this._boardListService.getBoardListByUser().subscribe(
      data => this.boards = data.boards);
    this._boardListService.getBoardListByUser().subscribe(
      data => this.user = data);

  }

  
  createBoard(){
    //console.log(this.bIn);
    //console.log(this.user['boards'][0]);
    let userDTO: User;
    userDTO = this.user;
    let obj = {};
    
    let boardD = new Board(null,this.bIn, null, userDTO.id, null, null);
    console.log(boardD);
    let boardS = '{ boardName: "' + this.bIn + '"}';
    obj=boardD;
    userDTO.boards;
   // push(new Board(this.bIn, userDTO));
    //console.log(userDTO);
    let surl: string = 'http://localhost:80/api/v1/createUser';
    userDTO.boards.push(boardD);
    //console.log(this.user);
    
    const userString = this.circular(this.user)
    console.log(userString);
    const customString =this.circular(userDTO);
    //console.log('my custom string:' + customString);
   this.http.post(surl,userDTO,httpOptions ).subscribe();

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
