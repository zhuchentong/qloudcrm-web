import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamsConfigComponent } from './params-config.component';

describe('ParamsConfigComponent', () => {
  let component: ParamsConfigComponent;
  let fixture: ComponentFixture<ParamsConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamsConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamsConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
