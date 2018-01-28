import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

// map() function which maps http responses into our objects
import 'rxjs/Rx';

// Models
import { User } from '../models/user.model';
import { Story } from '../models/story.model'; 
import { Task } from '../models/task.model';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const deleteTaskUrl = 'http://localhost:80/api/v1/task/delete'

@Injectable()
export class TaskService {

    // Injecting the http object
    constructor(private httpGet: Http, private http: HttpClient) { }

    public deleteStory(task: Task) {
        this.http.post(deleteTaskUrl, JSON.stringify(task), httpOptions)
        .subscribe();
    }
       
    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}