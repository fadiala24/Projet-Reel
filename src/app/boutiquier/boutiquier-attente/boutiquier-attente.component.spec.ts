import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutiquierAttenteComponent } from './boutiquier-attente.component';

describe('BoutiquierAttenteComponent', () => {
  let component: BoutiquierAttenteComponent;
  let fixture: ComponentFixture<BoutiquierAttenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutiquierAttenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutiquierAttenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
