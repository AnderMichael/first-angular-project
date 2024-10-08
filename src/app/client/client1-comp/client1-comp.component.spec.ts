import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Client1CompComponent } from './client1-comp.component';

describe('Client1CompComponent', () => {
  let component: Client1CompComponent;
  let fixture: ComponentFixture<Client1CompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Client1CompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Client1CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
