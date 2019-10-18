import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConflictListComponent } from './conflict-list.component';

describe('ConflictListComponent', () => {
  let component: ConflictListComponent;
  let fixture: ComponentFixture<ConflictListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConflictListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConflictListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
