import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreListComponent } from './explore-list.component';

describe('ExploreListComponent', () => {
  let component: ExploreListComponent;
  let fixture: ComponentFixture<ExploreListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
