import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {UserTweetsContainerComponent} from "./user-tweets-container.component";


describe('UserTweetsContainerComponent', () => {
  let component: UserTweetsContainerComponent;
  let fixture: ComponentFixture<UserTweetsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserTweetsContainerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTweetsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
