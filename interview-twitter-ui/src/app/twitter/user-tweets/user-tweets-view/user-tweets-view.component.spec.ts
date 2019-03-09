import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UserTweetsViewComponent} from './user-tweets-view.component';

describe('UserTweetsViewComponent', () => {
  let component: UserTweetsViewComponent;
  let fixture: ComponentFixture<UserTweetsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserTweetsViewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTweetsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
