import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAnalysisComponent } from './event-analysis.component';

describe('EventAnalysisComponent', () => {
  let component: EventAnalysisComponent;
  let fixture: ComponentFixture<EventAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
