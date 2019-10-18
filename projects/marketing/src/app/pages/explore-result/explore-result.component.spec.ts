import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreResultComponent } from './explore-result.component';

describe('ExploreResultComponent', () => {
  let component: ExploreResultComponent;
  let fixture: ComponentFixture<ExploreResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
