import {Component, Input} from '@angular/core';
import {TweetModel} from "../../../models/tweet.model";

@Component({
  selector: 'app-tweets-table',
  templateUrl: './tweets-table.component.html',
  styleUrls: ['./tweets-table.component.css']
})
export class TweetsTableComponent {

  @Input() tweets: TweetModel[];

}
