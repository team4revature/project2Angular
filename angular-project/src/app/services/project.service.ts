import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpParams } from '@angular/common/http';
// map() function which maps http responses into our objects
import 'rxjs/Rx';

import { Swimlane } from '../models/swimlane.model';
import { Board } from '../models/board.model';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    observe: 'response' as 'response'
};
const createSwimLaneUrl = 'http://localhost:80/api/v1/board/createswimlane';

@Injectable()
export class ProjectService {

    public constructor(private http: HttpClient) { }

    /*
    public getBoardByName(boardName: string): Observable<Board> {
        return this.http.get<any>(getBoardUrl, httpOptions)
    }*/

    public createSwimLane(board: Board, swimlane: Swimlane): Observable<Swimlane> {
        //for testing only boardid parameter is static
        return this.http.post<any>(createSwimLaneUrl,
            JSON.stringify({ boardId: 1, swimlane: swimlane }), httpOptions)
            .map(response => {
                return JSON.parse(JSON.stringify(response.body));
            })
    }
}