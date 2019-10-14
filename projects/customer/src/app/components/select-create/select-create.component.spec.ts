import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCreateComponent } from './select-create.component';

describe('SelectCreateComponent', () => {
  let component: SelectCreateComponent;
  let fixture: ComponentFixture<SelectCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
