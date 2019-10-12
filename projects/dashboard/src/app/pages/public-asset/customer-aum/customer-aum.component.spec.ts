import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAumComponent } from './customer-aum.component';

describe('CustomerAumComponent', () => {
  let component: CustomerAumComponent;
  let fixture: ComponentFixture<CustomerAumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerAumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
