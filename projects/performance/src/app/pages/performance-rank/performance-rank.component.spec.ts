import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceRankComponent } from './performance-rank.component';

describe('PerformanceRankComponent', () => {
  let component: PerformanceRankComponent;
  let fixture: ComponentFixture<PerformanceRankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformanceRankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
