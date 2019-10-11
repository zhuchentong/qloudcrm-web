import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerLevelComponent } from './customer-level.component';

describe('CustomerLevelComponent', () => {
  let component: CustomerLevelComponent;
  let fixture: ComponentFixture<CustomerLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
