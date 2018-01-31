import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/user.model';
import { Board } from '../models/board.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  observe: 'response' as 'response'
};

@Component({
  selector: 'app-contextmenu',
  templateUrl: './contextmenu.component.html',
  styleUrls: ['./contextmenu.component.css']
})
export class ContextmenuComponent implements OnInit {
  @Input()user;
  @Input()board;
  @Input() x=0;
  @Input() y=0;
  boardDTO: Board;
  constructor(private http: HttpClient) { }

  ngOnInit() {

  }
  addUser(){
    
    let s: number[];
    let send: string;
      s.push(this.board.bid);
      s.push(this.user.uid);
    console.log(s);
    let surl: string = 'http://localhost:80/api/v1/updateBoard';
    this.http.post(surl, JSON.stringify({ bid: this.board.bid, uid: this.user.uid }), httpOptions).subscribe();
    //this.http.post(surl,s,httpOptions ).subscribe();
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
