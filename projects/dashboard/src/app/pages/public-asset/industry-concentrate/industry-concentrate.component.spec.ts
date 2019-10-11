import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryConcentrateComponent } from './industry-concentrate.component';

describe('IndustryConcentrateComponent', () => {
  let component: IndustryConcentrateComponent;
  let fixture: ComponentFixture<IndustryConcentrateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndustryConcentrateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustryConcentrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
