import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskSubmitComponent } from './task-submit.component';

describe('TaskSubmitComponent', () => {
  let component: TaskSubmitComponent;
  let fixture: ComponentFixture<TaskSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
