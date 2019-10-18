import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectExploreComponent } from './select-explore.component';

describe('SelectExploreComponent', () => {
  let component: SelectExploreComponent;
  let fixture: ComponentFixture<SelectExploreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectExploreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
