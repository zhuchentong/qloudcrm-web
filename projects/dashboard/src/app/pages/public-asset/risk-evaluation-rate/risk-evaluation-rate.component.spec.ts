import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskEvaluationRateComponent } from './risk-evaluation-rate.component';

describe('RiskEvaluationRateComponent', () => {
  let component: RiskEvaluationRateComponent;
  let fixture: ComponentFixture<RiskEvaluationRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskEvaluationRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskEvaluationRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
