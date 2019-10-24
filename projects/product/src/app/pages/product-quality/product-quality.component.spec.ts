import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductQualityComponent } from './product-quality.component';

describe('ProductQualityComponent', () => {
  let component: ProductQualityComponent;
  let fixture: ComponentFixture<ProductQualityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductQualityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
