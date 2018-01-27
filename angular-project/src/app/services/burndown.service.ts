import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
// map() function which maps http responses into our objects
import 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { History } from '../models/history.model';
// import { Board } from '../models/board.model';

/*
import { Http, Response } from '@angular/http';
import { Flashcardz } from './../models/flashcardz.model';

@Injectable()
export class FlashcardzService {
  url = `http://localhost:8080/FlashCardAPI/api/v1/flashcard/all`;

  //injecting dependencies
  constructor(private http: Http) { }

  getAllFlashcardz(): Observable<Flashcardz[]> {
      return this.http
      .get(this.url)
      //must import response datatype
      .map((response: Response) => {
        return <Flashcardz[]> response.json();
      });

*/

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const HISTORY : History[] = [
    {hid: 1, key: '2016-04-17', value: 300},
    {hid: 2, key: '2016-04-18', value: 200},
    {hid: 3, key: '2016-04-19', value: 100},
    {hid: 4, key: '2016-04-20', value: 50}
];

// const loginUrl = `http://localhost:80/api/v1/login`;


@Injectable()
export class BurndownService {

    url = `http://localhost:80/api/v1/burndown/351`;
    //url2 = `http://localhost:80/api/vi/history/`;

   // argBoard: Board;
    argHistory: History[];

        // Injecting the http object
        constructor(private http: HttpClient) {
            this.init();
        }
    
        private init() {
           // this.requestOptions = new RequestOptions({headers: headers});
        }
    
        getHistory(): Observable<History[]> { // change out for real data
            
            return this.http
            .get<History[]>(this.url, {withCredentials: true});

            // return this.http
            // .get(this.url, {withCredentials: true})
            // .map((response: Response) => {
            //     return <History[]> response.json();
          //  });
        }
//             .map((response: Response) => {
// //                console.log('' + response.json());
//                 return <History[]> response.json();
//             });

            // this.getBoard().subscribe(board1 =>{ this.argBoard = board1; 
            //     this.extractHistory(this.argBoard.burnDown); return of(board1.burnDown); });
            
            /*
            this.burndownService.getHistory()
            .subscribe(history1 =>{ this.history = history1; this.bindData(); });


            */
            
            //return of(HISTORY);
        

        // extractHistory(boardHistory: History[]){

        //     // let url3 = this.url2;

        //     this.argHistory = boardHistory;

        //     // for(const h of boardHistory) {
        //     // }
        // }

        // getBoard(): Observable<Board> {
        //     return this.http
        //     .get(this.url)
        //     .map((response: Response) => {
        //         return <Board> response.json();
        //     });

        // }
    
        private handleError(error: Response) {
            return Observable.throw(error.statusText);
        }

}


