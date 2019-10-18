import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConflictDetialComponent } from './conflict-detial.component';

describe('ConflictDetialComponent', () => {
  let component: ConflictDetialComponent;
  let fixture: ComponentFixture<ConflictDetialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConflictDetialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConflictDetialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
