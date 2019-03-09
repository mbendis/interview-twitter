import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {UserTweetsContainerComponent} from "./user-tweets-container/user-tweets-container.component";
import {UserTweetsViewComponent} from "./user-tweets-view/user-tweets-view.component";
import {UserTweetsTableComponent} from "./user-tweets-table/user-tweets-table.component";
import {CreateTweetModule} from '../create-tweet/create-tweet.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '', component: UserTweetsContainerComponent, children: [
          {path: '', component: UserTweetsViewComponent},
        ],
      },
    ]),
    CommonModule,
    CreateTweetModule,
  ],
  declarations: [UserTweetsContainerComponent, UserTweetsViewComponent, UserTweetsTableComponent],
})
export class UserTweetsModule {
}
