import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAssetsComponent } from './customer-assets.component';

describe('CustomerAssetsComponent', () => {
  let component: CustomerAssetsComponent;
  let fixture: ComponentFixture<CustomerAssetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerAssetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
