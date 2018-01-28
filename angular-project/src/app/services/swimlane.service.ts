import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpParams } from '@angular/common/http';
// map() function which maps http responses into our objects
import 'rxjs/Rx';

import { Swimlane } from '../models/swimlane.model';
import { Board } from '../models/board.model';
import { Story } from '../models/story.model';
import { Task } from '../models/task.model';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    observe: 'response' as 'response'
};

const getBoardUrl = 'http://localhost:80/api/v1/board/';
const createSwimLaneUrl = 'http://localhost:80/api/v1/board/addswimlane';
const createStoryUrl = 'http://localhost:80/api/v1/swimlane/addstory';
const createTaskUrl = 'http://localhost:80/api/v1/story/addtask';
const deleteSwimlaneUrl = 'http://localhost:80/api/v1/swimlane/delete';

@Injectable()
export class SwimlaneService {

    public constructor(private http: HttpClient) { }

    public deleteSwimlane(swimlane: Swimlane) {
        console.log(swimlane);
        this.http.post(deleteSwimlaneUrl, JSON.stringify(swimlane), httpOptions)
        .subscribe();
    }

    public createSwimlane(board: Board, swimlane: Swimlane): Observable<Board> {
        //for testing only set boardid static
        return this.http.post<any>(createSwimLaneUrl,
            JSON.stringify({ boardId: board.bid, swimlane: swimlane }), httpOptions)
            .map(response => {
                return JSON.parse(JSON.stringify(response.body));
            });
        }

    
    /*
    public deleteSwimlane(swimlane: Swimlane): Observable<boolean> {
        console.log('deleting swimlane on server' + swimlane.sid);
        return this.http.post<any>('http://localhost:80/api/v1/swimlane/delete',
            swimlane.sid)
            .map(response => {
                return true;
                //return JSON.parse(JSON.stringify(response.body));
            });
    }*/

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}