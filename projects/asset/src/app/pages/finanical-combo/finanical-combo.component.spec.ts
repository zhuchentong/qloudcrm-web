import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanicalComboComponent } from './finanical-combo.component';

describe('FinanicalComboComponent', () => {
  let component: FinanicalComboComponent;
  let fixture: ComponentFixture<FinanicalComboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanicalComboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanicalComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
