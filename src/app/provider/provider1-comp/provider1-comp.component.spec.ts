import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Provider1CompComponent } from './provider1-comp.component';

describe('Provider1CompComponent', () => {
  let component: Provider1CompComponent;
  let fixture: ComponentFixture<Provider1CompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Provider1CompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Provider1CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
