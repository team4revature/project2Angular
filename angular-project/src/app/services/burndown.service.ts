import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { History } from '../models/history.model';



const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class BurndownService {

    url = 'http://localhost:80/api/v1/burndown/';

    argHistory: History[];

        constructor(private http: HttpClient) {
            this.init();
        }
    
        private init() {
        }
    
        getHistory(): Observable<History[]> {
            
            return this.http
            .get<History[]>(this.url + sessionStorage.getItem('BoardId'), {withCredentials: true});

        }

    
        private handleError(error: Response) {
            return Observable.throw(error.statusText);
        }

}


