import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcellentListComponent } from './excellent-list.component';

describe('ExcellentListComponent', () => {
  let component: ExcellentListComponent;
  let fixture: ComponentFixture<ExcellentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcellentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcellentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
