import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

// map() function which maps http responses into our objects
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

    // Injecting the http object
    constructor(private httpGet: Http, private http: HttpClient)
    {
        // this.init();
    }

    public deleteStory(swimlane: Swimlane, index: number) {
        this.http.post(deleteStoryUrl, JSON.stringify({ objectId: swimlane.sid, index: index }), httpOptions)
        .subscribe();
    }
 
    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}