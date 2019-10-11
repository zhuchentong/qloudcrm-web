import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeverageRatioComponent } from './leverage-ratio.component';

describe('LeverageRatioComponent', () => {
  let component: LeverageRatioComponent;
  let fixture: ComponentFixture<LeverageRatioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeverageRatioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeverageRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
