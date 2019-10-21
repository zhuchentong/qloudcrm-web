import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDocumentComponent } from './product-document.component';

describe('ProductDocumentComponent', () => {
  let component: ProductDocumentComponent;
  let fixture: ComponentFixture<ProductDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
