import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTagComponent } from './customer-tag.component';

describe('CustomerTagComponent', () => {
  let component: CustomerTagComponent;
  let fixture: ComponentFixture<CustomerTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
