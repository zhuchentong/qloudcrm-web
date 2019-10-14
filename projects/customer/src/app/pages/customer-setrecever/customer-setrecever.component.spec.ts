import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSetreceverComponent } from './customer-setrecever.component';

describe('CustomerSetreceverComponent', () => {
  let component: CustomerSetreceverComponent;
  let fixture: ComponentFixture<CustomerSetreceverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerSetreceverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSetreceverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
