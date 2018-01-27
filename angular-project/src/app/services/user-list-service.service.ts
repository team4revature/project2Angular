import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user.model';

@Injectable()
export class UserListServiceService {

  constructor(private http: HttpClient) { }
  private _url  = 'http://localhost:80/api/v1/user/1';
  getUser(): Observable<User> {

    return this.http.get<User>(this._url);
   }
}
