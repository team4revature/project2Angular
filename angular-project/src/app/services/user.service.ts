import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// map() function which maps http responses into our objects
import 'rxjs/Rx';

// Models
import { User } from '../models/user.model';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const loginUrl = `http://localhost:80/api/v1/authenticate`;

@Injectable()
export class UserService {

    // Injecting the http object
    constructor(private http: HttpClient) {
        this.init();
    }

    private init() {
       // this.requestOptions = new RequestOptions({headers: headers});
    }

    public login(user: User): Observable<User> {
        return this.http.post<any>(loginUrl,
            JSON.stringify({username: user.username, password: user.password}),
            httpOptions)
            .map(response => {
                if (response && response.headers) {
                    console.log(response.headers);
                    /*localStorage.setItem('currentUser',
                        JSON.stringify(response.headers("")));*/
                }
            })
            .catch(this.handleError);
        }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}
