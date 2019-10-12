import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaignComponent } from './compaign.component';

describe('CompaignComponent', () => {
  let component: CompaignComponent;
  let fixture: ComponentFixture<CompaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompaignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
