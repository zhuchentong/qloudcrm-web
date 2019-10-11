import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicAssetComponent } from './public-asset.component';

describe('PublicAssetComponent', () => {
  let component: PublicAssetComponent;
  let fixture: ComponentFixture<PublicAssetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicAssetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
