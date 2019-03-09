import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TweetModel} from "../../models/tweet.model";
import {Observable} from "rxjs/Observable";

const ENDPOINT_BASE = '/api/tweets';

@Injectable()
export class TweetService {

  constructor(private http: HttpClient) {
  }

  fetch(): Observable<TweetModel[]> {
    return this.http.get<TweetModel[]>(ENDPOINT_BASE);
  }

  fetchForUser(username: string) {
    return this.http.get<TweetModel[]>(ENDPOINT_BASE + '/' + username);
  }

  create(tweetContent: string) {
    return this.http.post<TweetModel>(ENDPOINT_BASE, tweetContent);
  }
}
