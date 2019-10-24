import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceStatisticComponent } from './performance-statistic.component';

describe('PerformanceStatisticComponent', () => {
  let component: PerformanceStatisticComponent;
  let fixture: ComponentFixture<PerformanceStatisticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformanceStatisticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
