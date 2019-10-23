import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelGroupComponent } from './sel-group.component';

describe('SelGroupComponent', () => {
  let component: SelGroupComponent;
  let fixture: ComponentFixture<SelGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
