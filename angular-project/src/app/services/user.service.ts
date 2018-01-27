import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpParams } from '@angular/common/http';
// map() function which maps http responses into our objects
import 'rxjs/Rx';

// Models
import { User } from '../models/user.model';
import { Token } from '../models/token.model';
import { Router } from '@angular/router';

//observe required to see all headers and body
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    observe: 'response' as 'response'
};

const loginUrl = 'http://localhost:80/api/v1/login';
const getUserUrl = 'http://localhost:80/api/v1/userName/';
const getUserByIdURI= 'http://localhost:80/api/v1/user/';
@Injectable()
export class UserService {

    //username: string;
    //for testing
    username: string = 'larry';
   
    router: Router;

    // Injecting the http object
    constructor(private http: HttpClient) { }

    public login(user: User) {
        this.http.post<any>(loginUrl,
            JSON.stringify({ username: user.username, password: user.password }),
            httpOptions).subscribe(
            response => {
                user = <User>JSON.parse(JSON.stringify(response.body));
                this.username = user.username;
                localStorage.setItem('username', this.username);
            }
            );
        /*
        .map(response => {
            if (response) {
                console.log(response.headers);
                localStorage.setItem('access-token',
                    JSON.stringify(response));
            }
        })
        .catch(this.handleError);*/
    }

    //get user by username
    public getUser(username: string): Observable<User> {
       /* const myHttpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
            observe: 'response' as 'response',
            params: new HttpParams().set('id', this.username)
        };*/

        return this.http.get(getUserUrl + username, httpOptions)
            .map(response => {
                console.log(response);
                return JSON.parse(JSON.stringify(response.body));
            });
    }

    public getUserbyId(uid: number): Observable<User> {
        /* const myHttpOptions = {
             headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
             observe: 'response' as 'response',
             params: new HttpParams().set('id', this.username)
         };*/
 
         return this.http.get(getUserByIdURI + uid, httpOptions)
             .map(response => {
                 console.log(response);
                 return JSON.parse(JSON.stringify(response.body));
             });
     }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}
