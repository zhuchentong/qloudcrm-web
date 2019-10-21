import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttentionListComponent } from './attention-list.component';

describe('AttentionListComponent', () => {
  let component: AttentionListComponent;
  let fixture: ComponentFixture<AttentionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttentionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttentionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
