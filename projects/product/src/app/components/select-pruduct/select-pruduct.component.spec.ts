import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPruductComponent } from './select-pruduct.component';

describe('SelectPruductComponent', () => {
  let component: SelectPruductComponent;
  let fixture: ComponentFixture<SelectPruductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectPruductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPruductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
