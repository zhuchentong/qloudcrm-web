import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquitiesCreateComponent } from './equities-create.component';

describe('EquitiesCreateComponent', () => {
  let component: EquitiesCreateComponent;
  let fixture: ComponentFixture<EquitiesCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquitiesCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquitiesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
