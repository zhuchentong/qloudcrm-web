import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquitiesListComponent } from './equities-list.component';

describe('EquitiesListComponent', () => {
  let component: EquitiesListComponent;
  let fixture: ComponentFixture<EquitiesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquitiesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquitiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
