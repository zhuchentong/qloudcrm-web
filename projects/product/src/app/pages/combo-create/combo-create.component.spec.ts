import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboCreateComponent } from './combo-create.component';

describe('ComboCreateComponent', () => {
  let component: ComboCreateComponent;
  let fixture: ComponentFixture<ComboCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
