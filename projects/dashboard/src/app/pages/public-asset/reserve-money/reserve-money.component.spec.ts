import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveMoneyComponent } from './reserve-money.component';

describe('ReserveMoneyComponent', () => {
  let component: ReserveMoneyComponent;
  let fixture: ComponentFixture<ReserveMoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReserveMoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
