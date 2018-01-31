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



const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

// const HISTORY : History[] = [
//     {hid: 1, key: '2016-04-17', value: 300},
//     {hid: 2, key: '2016-04-18', value: 200},
//     {hid: 3, key: '2016-04-19', value: 100},
//     {hid: 4, key: '2016-04-20', value: 50}
// ];

// const loginUrl = `http://localhost:80/api/v1/login`;


@Injectable()
export class BurndownService {

    url = 'http://localhost:80/api/v1/burndown/';
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
            .get<History[]>(this.url + sessionStorage.getItem('BoardId'), {withCredentials: true});

        }

    
        private handleError(error: Response) {
            return Observable.throw(error.statusText);
        }

}


