import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignActivityComponent } from './campaign-activity.component';

describe('CampaignActivityComponent', () => {
  let component: CampaignActivityComponent;
  let fixture: ComponentFixture<CampaignActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
