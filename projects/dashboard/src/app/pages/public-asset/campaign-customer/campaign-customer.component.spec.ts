import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignCustomerComponent } from './campaign-customer.component';

describe('CampaignCustomerComponent', () => {
  let component: CampaignCustomerComponent;
  let fixture: ComponentFixture<CampaignCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
