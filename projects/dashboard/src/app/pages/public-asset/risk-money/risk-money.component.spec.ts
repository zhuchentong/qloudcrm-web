import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskMoneyComponent } from './risk-money.component';

describe('RiskMoneyComponent', () => {
  let component: RiskMoneyComponent;
  let fixture: ComponentFixture<RiskMoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskMoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
