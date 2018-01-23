import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

// map() function which maps http responses into our objects
import 'rxjs/Rx';

// Models
import { User } from '../models/user.model';
import { Story } from '../models/story.model'; 

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const getStoryUrl   = `http://localhost:80/api/v1/story/50`;
const createUserUrl = 'http://localhost:80/api/v1/createStory'; 

@Injectable()
export class UserStoriesService {

    story: Story; 

    // Injecting the http object
    constructor(private httpGet: Http, private httpCli: HttpClient)
    {
        // this.init();
    }
    
    getStoryInformation(id: number): Observable<Story> {
        return this.httpGet
        .get(getStoryUrl)
        .map((response: Response) => {
            console.log(response);
            return <Story> response.json(); 
        }); 
    }

    public addStory(story: Story): Observable<Story> { 
        return this.httpCli.post<Story>(createUserUrl, JSON.stringify(story), httpOptions); 
    }
       
    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}