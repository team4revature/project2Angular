import {NgModule, Injectable} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
// Import HttpClientModule from @angular/common/http
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { User } from '../models/user.model';
import { Board } from '../models/board.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  observe: 'response' as 'response'
};
@Injectable()

export class BoardListService {
  constructor(private http: HttpClient) { }
  private _url  = 'http://localhost:80/api/v1/getboards/';

  getBoardListByUser(uid: number): Observable<Board[]> {

    return this.http.get<Board[]>(this._url + uid);
   }
}
