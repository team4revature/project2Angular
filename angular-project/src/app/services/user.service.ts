import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpParams } from '@angular/common/http';
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
    // Injecting the http object
    constructor(private http: HttpClient, private router: Router) {
        this.init();
    }

    private init() {
       // this.requestOptions = new RequestOptions({headers: headers});
    }

    public login(user: User){//: Observable<User> {
        this.http.post<any>(loginUrl,
            JSON.stringify({ username: user.username, password: user.password }),
            httpOptions).subscribe(
                response => {
                    user = <User>JSON.parse(JSON.stringify(response.body));
                    this.username = user.username;
                    localStorage.setItem('username', this.username);
                    localStorage.setItem('userId' , user.uid.toString());
                    this.router.navigate(['','boardpage' , user.uid]);
                }
                );
        }

            //get user by username
    public getUser(username: string): Observable<User> {
       
        return this.http.get(getUserUrl + username, httpOptions)
            .map(response => {
                console.log(response);
                return JSON.parse(JSON.stringify(response.body));
            });
    }


    public getUserbyId(uid: number): Observable<User> {
        
 
         return this.http.get(getUserByIdURI + uid, httpOptions)
             .map(response => {
                 console.log(response);
                 return JSON.parse(JSON.stringify(response.body));
             });
     }
        /*
    public get(user: User): Observable<User> {
        return this.http.get<User>(databaseUrl, httpOptions)
        .catch(this.handleError);
    }*/

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}

/*
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpParams } from '@angular/common/http';
import 'rxjs/Rx';
// Models
import { User } from '../models/user.model';
import { Token } from '../models/token.model';
//observe required to see all headers and body
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    observe: 'response' as 'response'
};
const loginUrl = 'http://localhost:80/api/v1/login';
const getUserUrl = 'http://localhost:80/api/v1/userName/';
@Injectable()
export class UserService {
    //username: string;
    //for testing
    username: string = 'larry';
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
        
        
    }
    //get user by username
    public getUser(username: string): Observable<User> {
       
        return this.http.get(getUserUrl + username, httpOptions)
            .map(response => {
                console.log(response);
                return JSON.parse(JSON.stringify(response.body));
            });
    }
    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }

    
}

*/

