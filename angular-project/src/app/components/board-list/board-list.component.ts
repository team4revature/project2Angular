import { Component, OnInit, Input } from '@angular/core';
import { BoardListService } from '../../services/board-list-service.service';
import { BoardItemComponent } from '../board-item/board-item.component';
import { User } from '../../models/user.model';
import { Board } from '../../models/board.model';
import { RequestOptions, RequestMethod, Http, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http/src/module';
import { Headers } from '@angular/http/src/headers';
import { Location } from '@angular/common';
import { UserService } from '../../services/user.service';
import { UserListServiceService } from '../../services/user-list-service.service';
import { Router } from '@angular/router';


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
  @Input()boards;
  @Input()user;
  @Input()masterBoards;
  @Input()memberBoards;

  userDTO: any;
  apiURL: any;

  
 // public user: User;
  public bIn: string;
  public uid: number;
  router: Router;
  constructor(private http: HttpClient) {}

  ngOnInit() {      
    console.log("master" , this.masterBoards);
    console.log("member", this.memberBoards);
  }

  
  createBoard(){
    let boardD = new Board(null,this.bIn, null, this.user, null, null);
    console.log(this.user);
    //console.log(boardD);
    this.user.boards.push(boardD);
    let s: string = this.circular(boardD);
    //console.log('boardL ' + s);
    let surl: string = 'http://localhost:80/api/v1/createBoard';
   this.http.post(surl,s,httpOptions ).subscribe();
   window.location.reload();
  // window.location.href = "/boardpage";
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
