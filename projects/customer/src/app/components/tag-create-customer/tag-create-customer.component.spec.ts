import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagCreateCustomerComponent } from './tag-create-customer.component';

describe('TagCreateCustomerComponent', () => {
  let component: TagCreateCustomerComponent;
  let fixture: ComponentFixture<TagCreateCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagCreateCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagCreateCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
