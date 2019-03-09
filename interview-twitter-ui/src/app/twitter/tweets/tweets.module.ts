import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TweetsContainerComponent} from "./tweets-container/tweets-container.component";
import {TweetsViewComponent} from './tweets-view/tweets-view.component';
import {TweetsTableComponent} from './tweets-table/tweets-table.component';
import {RouterModule} from "@angular/router";
import {CreateTweetModule} from '../create-tweet/create-tweet.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '', component: TweetsContainerComponent, children: [
          {path: '', component: TweetsViewComponent},
        ],
      },
    ]),
    CommonModule,
    CreateTweetModule,
  ],
  declarations: [TweetsContainerComponent, TweetsViewComponent, TweetsTableComponent]
})
export class TweetsModule {
}
