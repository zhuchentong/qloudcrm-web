import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivilyMonitorComponent } from './activily-monitor.component';

describe('ActivilyMonitorComponent', () => {
  let component: ActivilyMonitorComponent;
  let fixture: ComponentFixture<ActivilyMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivilyMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivilyMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
