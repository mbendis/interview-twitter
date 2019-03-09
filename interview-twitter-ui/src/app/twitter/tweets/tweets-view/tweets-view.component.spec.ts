import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetsViewComponent } from './tweets-view.component';

describe('TweetsViewComponent', () => {
  let component: TweetsViewComponent;
  let fixture: ComponentFixture<TweetsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
