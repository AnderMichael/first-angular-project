import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shared1CompComponent } from './shared1-comp.component';

describe('Shared1CompComponent', () => {
  let component: Shared1CompComponent;
  let fixture: ComponentFixture<Shared1CompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Shared1CompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Shared1CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
