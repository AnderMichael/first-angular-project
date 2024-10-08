import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product2CompComponent } from './product2-comp.component';

describe('Product2CompComponent', () => {
  let component: Product2CompComponent;
  let fixture: ComponentFixture<Product2CompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Product2CompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Product2CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
