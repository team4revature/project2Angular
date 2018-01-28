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
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    observe: 'response' as 'response'
};

const deleteTaskUrl = 'http://localhost:80/api/v1/story/removetask';
const createTaskUrl = 'http://localhost:80/api/v1/story/addtask';
const updateTaskUrl = 'http://localhost:80/api/v1/task/update';

@Injectable()
export class TaskService {

    // Injecting the http object
    constructor(private httpGet: Http, private http: HttpClient) { }

    public createTask(story: Story, task: Task): Observable<Task> {
        //for testing only set boardid static
        return this.http.post<any>(createTaskUrl,
            JSON.stringify({ storyId: story.stId, task: task }), httpOptions)
            //parse response to json
            .map(response => {
                console.log(response.body);
                return <Task>JSON.parse(JSON.stringify(response.body));
            });
    }

    public updateTask(task: Task): Observable<Task> {
        return this.http.post<any>(updateTaskUrl,
            JSON.stringify(task), httpOptions)
            //parse response to json
            .map(response => {
                console.log(response.body);
                return <Task>JSON.parse(JSON.stringify(response.body));
            });
    }

    public deleteTask(story: Story, index: number) {
        this.http.post(deleteTaskUrl, JSON.stringify({ objectId: story.stId, index: index }), httpOptions)
            .subscribe();
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}