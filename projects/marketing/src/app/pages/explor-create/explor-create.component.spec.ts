import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorCreateComponent } from './explor-create.component';

describe('ExplorCreateComponent', () => {
  let component: ExplorCreateComponent;
  let fixture: ComponentFixture<ExplorCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExplorCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
