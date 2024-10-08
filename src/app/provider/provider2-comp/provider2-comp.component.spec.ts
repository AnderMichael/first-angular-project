import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Provider2CompComponent } from './provider2-comp.component';

describe('Provider2CompComponent', () => {
  let component: Provider2CompComponent;
  let fixture: ComponentFixture<Provider2CompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Provider2CompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Provider2CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
