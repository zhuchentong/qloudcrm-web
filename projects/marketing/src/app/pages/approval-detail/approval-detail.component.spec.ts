import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalDetailComponent } from './approval-detail.component';

describe('ApprovalDetailComponent', () => {
  let component: ApprovalDetailComponent;
  let fixture: ComponentFixture<ApprovalDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
