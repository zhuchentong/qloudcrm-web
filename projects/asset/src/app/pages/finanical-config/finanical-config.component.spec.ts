import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanicalConfigComponent } from './finanical-config.component';

describe('FinanicalConfigComponent', () => {
  let component: FinanicalConfigComponent;
  let fixture: ComponentFixture<FinanicalConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanicalConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanicalConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
