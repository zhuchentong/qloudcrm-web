import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityStatistComponent } from './activity-statist.component';

describe('ActivityStatistComponent', () => {
  let component: ActivityStatistComponent;
  let fixture: ComponentFixture<ActivityStatistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityStatistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityStatistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
