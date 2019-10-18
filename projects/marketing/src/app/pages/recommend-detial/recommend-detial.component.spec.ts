import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendDetialComponent } from './recommend-detial.component';

describe('RecommendDetialComponent', () => {
  let component: RecommendDetialComponent;
  let fixture: ComponentFixture<RecommendDetialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendDetialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendDetialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
