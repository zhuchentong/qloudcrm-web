import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectInterestComponent } from './select-interest.component';

describe('SelectInterestComponent', () => {
  let component: SelectInterestComponent;
  let fixture: ComponentFixture<SelectInterestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectInterestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
