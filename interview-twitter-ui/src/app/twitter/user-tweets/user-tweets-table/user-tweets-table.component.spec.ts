import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {UserTweetsTableComponent} from "./user-tweets-table.component";

describe('UserTweetsTableComponent', () => {
  let component: UserTweetsTableComponent;
  let fixture: ComponentFixture<UserTweetsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserTweetsTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTweetsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
