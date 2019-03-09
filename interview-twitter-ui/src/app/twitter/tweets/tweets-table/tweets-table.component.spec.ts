import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TweetsTableComponent} from './tweets-table.component';

describe('TweetsTableComponent', () => {
  let component: TweetsTableComponent;
  let fixture: ComponentFixture<TweetsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TweetsTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
