import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TweetModel} from "../../models/tweet.model";
import {Observable} from "rxjs/Observable";
import {FollowerModel} from "../../models/follower.model";

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
}
