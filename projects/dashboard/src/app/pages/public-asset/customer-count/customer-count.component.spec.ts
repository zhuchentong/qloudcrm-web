import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCountComponent } from './customer-count.component';

describe('CustomerCountComponent', () => {
  let component: CustomerCountComponent;
  let fixture: ComponentFixture<CustomerCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
