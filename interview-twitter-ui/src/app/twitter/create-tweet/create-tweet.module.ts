import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateTweetComponent} from './create-tweet/create-tweet.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [CreateTweetComponent],
  exports: [CreateTweetComponent]
})
export class CreateTweetModule {
}
