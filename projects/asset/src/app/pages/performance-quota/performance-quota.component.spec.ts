import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceQuotaComponent } from './performance-quota.component';

describe('PerformanceQuotaComponent', () => {
  let component: PerformanceQuotaComponent;
  let fixture: ComponentFixture<PerformanceQuotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformanceQuotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceQuotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
