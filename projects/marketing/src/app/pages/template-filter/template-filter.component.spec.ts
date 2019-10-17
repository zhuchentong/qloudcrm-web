import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFilterComponent } from './template-filter.component';

describe('TemplateFilterComponent', () => {
  let component: TemplateFilterComponent;
  let fixture: ComponentFixture<TemplateFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
