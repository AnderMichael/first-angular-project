import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Client2CompComponent } from './client2-comp.component';

describe('Client2CompComponent', () => {
  let component: Client2CompComponent;
  let fixture: ComponentFixture<Client2CompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Client2CompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Client2CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
