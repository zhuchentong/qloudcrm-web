import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitTypeComponent } from './profit-type.component';

describe('ProfitTypeComponent', () => {
  let component: ProfitTypeComponent;
  let fixture: ComponentFixture<ProfitTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfitTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfitTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
