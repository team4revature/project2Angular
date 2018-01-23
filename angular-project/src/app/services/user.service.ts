import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// map() function which maps http responses into our objects
import 'rxjs/Rx';

// Models
import { User } from '../models/user.model';
import { Token } from '../models/token.model';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const loginUrl = `http://localhost:80/api/v1/login`;

@Injectable()
export class UserService {

    // Injecting the http object
    constructor(private http: HttpClient) {
        this.init();
    }

    private init() {
       // this.requestOptions = new RequestOptions({headers: headers});
    }

    public login(user: User): Observable<Token> {
        return this.http.post<any>(loginUrl,
            JSON.stringify({username: user.username, password: user.password}),
            httpOptions)
            .map(token => {
                if (token) {
                    console.log(token);
                    localStorage.setItem('access-token',
                        JSON.stringify(token));
                }
            })
            .catch(this.handleError);
        }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}
