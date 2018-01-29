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
export class ProjectService {

    public constructor(private http: HttpClient) { }

    public getBoard(boardId: number): Observable<Board> {
        return this.http.get<any>(getBoardUrl + boardId);
    }

    public createSwimLane(board: Board, swimlane: Swimlane): Observable<Swimlane> {
        //for testing only set boardid static
        return this.http.post<any>(createSwimLaneUrl,
            JSON.stringify({ boardId: board.bid, swimlane: swimlane }), httpOptions)
            .map(response => {
                return JSON.parse(JSON.stringify(response.body));
            })
    }

    public createStory(swimlane: Swimlane, story: Story): Observable<Story> {
        return this.http.post<any>(createStoryUrl,
            JSON.stringify({ swimlaneId: swimlane.sid, story: story }), httpOptions)
            .map(response => {
                return JSON.parse(JSON.stringify(response.body));
            })
            .catch(this.handleError);
    }

   

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}