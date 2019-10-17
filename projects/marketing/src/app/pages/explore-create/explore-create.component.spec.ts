import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreCreateComponent } from './explore-create.component';

describe('ExploreCreateComponent', () => {
  let component: ExploreCreateComponent;
  let fixture: ComponentFixture<ExploreCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
