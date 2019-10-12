import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagCreateGroupComponent } from './tag-create-group.component';

describe('TagCreateGroupComponent', () => {
  let component: TagCreateGroupComponent;
  let fixture: ComponentFixture<TagCreateGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagCreateGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagCreateGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
