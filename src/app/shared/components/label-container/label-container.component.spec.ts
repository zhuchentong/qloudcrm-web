import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelContainerComponent } from './label-container.component';

describe('LabelContainerComponent', () => {
  let component: LabelContainerComponent;
  let fixture: ComponentFixture<LabelContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
