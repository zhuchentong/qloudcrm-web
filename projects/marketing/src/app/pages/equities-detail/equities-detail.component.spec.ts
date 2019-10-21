import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquitiesDetailComponent } from './equities-detail.component';

describe('EquitiesDetailComponent', () => {
  let component: EquitiesDetailComponent;
  let fixture: ComponentFixture<EquitiesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquitiesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquitiesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
