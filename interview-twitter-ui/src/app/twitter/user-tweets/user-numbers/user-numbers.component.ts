import {Component, Input, OnInit} from '@angular/core';
import { UserService } from '../../../services/user/user.service';
import {HttpClient} from '@angular/common/http';
import {TweetService} from "../../../services/tweet/tweet.service";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-user-numbers',
  templateUrl: './user-numbers.component.html',
  styleUrls: ['./user-numbers.component.css']
})
export class UserNumbersComponent implements OnInit {

    followers: number;
    following: number;
    tweetsCount: number;
    constructor(private userService: UserService, private tweetService: TweetService, private authService: AuthService){
    }
    ngOnInit(): void {
        console.log('On init');
        this.userService.fetchFollowers().subscribe(
          followers => this.followers = followers.length);
        this.userService.fetchFollowing().subscribe(
                following => this.following = following.length);
        this.tweetService.fetchForUser(this.authService.getCurrentUser()).subscribe(
                      tweets => this.tweetsCount = tweets.length);

    }
}

