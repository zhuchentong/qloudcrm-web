import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetProportionComponent } from './asset-proportion.component';

describe('AssetProportionComponent', () => {
  let component: AssetProportionComponent;
  let fixture: ComponentFixture<AssetProportionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetProportionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetProportionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
