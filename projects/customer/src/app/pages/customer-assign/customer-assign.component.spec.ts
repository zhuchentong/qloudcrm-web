import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAssignComponent } from './customer-assign.component';

describe('CustomerAssignComponent', () => {
  let component: CustomerAssignComponent;
  let fixture: ComponentFixture<CustomerAssignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerAssignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
