import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreConditionComponent } from './explore-condition.component';

describe('ExploreConditionComponent', () => {
  let component: ExploreConditionComponent;
  let fixture: ComponentFixture<ExploreConditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreConditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
