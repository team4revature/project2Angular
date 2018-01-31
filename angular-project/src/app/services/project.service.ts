import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpParams } from '@angular/common/http';
import { DatePipe } from '@angular/common';
// map() function which maps http responses into our objects
import 'rxjs/Rx';

import { Swimlane } from '../models/swimlane.model';
import { Board } from '../models/board.model';
import { Story } from '../models/story.model';
import { Task } from '../models/task.model';
import { History } from '../models/history.model';
import { BurndownService } from './burndown.service';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    observe: 'response' as 'response'
};
const getBoardUrl = 'http://localhost:80/api/v1/board/';
const createSwimLaneUrl = 'http://localhost:80/api/v1/board/addswimlane';
const createStoryUrl = 'http://localhost:80/api/v1/swimlane/addstory';
const createTaskUrl = 'http://localhost:80/api/v1/story/addtask';
const deleteSwimlaneUrl = 'http://localhost:80/api/v1/swimlane/delete';
const updateBurndownUrl = 'http://localhost:80/api/v1/story/updateburndown';
const addHistoryUrl = 'http://localhost:80/api/v1/createHistory';


@Injectable()
export class ProjectService {

    tempBoard: Board;
    tempHist: History;
    tempHists: History[];
    now: Date;

    public constructor(private http: HttpClient, private datePipe: DatePipe, 
        private burndownService: BurndownService) { } // added datepipe

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
        
    
        let h;
        this.burndownService.getHistory()
        .subscribe(history1 =>{
            h = history1; 
            if(h != null && h.length > 0){
                this.tempHist = new History(this.now, 
                    story.difficulty + h[(h.length - 1)].value, 
                    +sessionStorage.getItem('BoardId'));
            }
            else{
                this.tempHist = new History(this.now, 
                    story.difficulty, 
                    +sessionStorage.getItem('BoardId'));
            }
            this.http.post<any>(addHistoryUrl, 
                JSON.stringify(this.tempHist), httpOptions).subscribe();
        });
        //if(h != null && h.length > 0)

        
        return this.http.post<any>(createStoryUrl,
            JSON.stringify({ swimlaneId: swimlane.sid, story: story }), httpOptions)
            .map(response => {
                
                //Begin David Added Code
                
                

                // this.getBoard( +sessionStorage.getItem("BoardId"))
                //     .subscribe(data => {
                //         console.log('got board');
                //         this.tempBoard = data;
                //         this.tempHist = this.tempBoard.burnDown;
                //         let v = this.tempHist[this.tempHist.length].value;
                //         let n = 0;
                //         if(v != null){
                //             n = v;
                //         }
                //         this.now = new Date();
                //         this.tempBoard.burnDown.push(new History(
                //             this.datePipe.transform(this.now,'yyyy-MM-dd'),
                //             story.difficulty + n));

                //         this.http.post<any>(updateBurndownUrl + this.tempBoard.bid, 
                //            JSON.stringify(this.tempBoard), 
                //            httpOptions);
                //     });
                    //End David Added Code
               
                
                return JSON.parse(JSON.stringify(response.body));
            })
            .catch(this.handleError);
    }

   

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}