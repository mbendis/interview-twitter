import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {FollowerModel} from "../../models/follower.model";
import {UserModel} from '../../models/user.model';

const ENDPOINT_BASE = '/api/';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  fetchFollowers(): Observable<FollowerModel[]> {
    return this.http.get<FollowerModel[]>(ENDPOINT_BASE + 'followers');
  }

  fetchFollowing() {
    return this.http.get<FollowerModel[]>(ENDPOINT_BASE + 'following');
  }

  register(username: string, password: string, firstName: string, lastName: string): Observable<UserModel> {
    const registrationData = { username: username, password: password, firstName: firstName, lastName: lastName};
    console.log('registration: ' + username + ' ' + password + ' ' + firstName + ' ' + lastName);
    return this.http.post<UserModel>(ENDPOINT_BASE + 'registration', registrationData);
  }
}
