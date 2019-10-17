import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivilyCommentComponent } from './activily-comment.component';

describe('ActivilyCommentComponent', () => {
  let component: ActivilyCommentComponent;
  let fixture: ComponentFixture<ActivilyCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivilyCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivilyCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
