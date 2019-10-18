import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectEventComponent } from './select-event.component';

describe('SelectEventComponent', () => {
  let component: SelectEventComponent;
  let fixture: ComponentFixture<SelectEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
