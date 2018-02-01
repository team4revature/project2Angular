import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

// Models
import { User } from '../models/user.model';
import { Story } from '../models/story.model'; 
import { Swimlane } from '../models/swimlane.model';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const deleteStoryUrl = 'http://localhost:80/api/v1/swimlane/removestory';

@Injectable()
export class StoryService {

    story: Story; 
    private newStory: Story;
    @Output()
    openStoryModalEvent: EventEmitter<Story> = new EventEmitter();

    constructor(private httpGet: Http, private http: HttpClient){
    }

    public deleteStory(swimlane: Swimlane, index: number) {
        this.http.post(deleteStoryUrl, JSON.stringify({ objectId: swimlane.sid, index: index }), httpOptions)
        .subscribe();
    }
 
    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }

    public openEditModal(story: Story) {
        console.log('emitting');
        this.newStory = story;
        this.openStoryModalEvent.emit(this.newStory);
    }
}