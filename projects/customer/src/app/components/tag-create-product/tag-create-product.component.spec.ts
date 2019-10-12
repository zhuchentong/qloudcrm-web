import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagCreateProductComponent } from './tag-create-product.component';

describe('TagCreateProductComponent', () => {
  let component: TagCreateProductComponent;
  let fixture: ComponentFixture<TagCreateProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagCreateProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagCreateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
