import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutiqueAttenteComponent } from './boutique-attente.component';

describe('BoutiqueAttenteComponent', () => {
  let component: BoutiqueAttenteComponent;
  let fixture: ComponentFixture<BoutiqueAttenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutiqueAttenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutiqueAttenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
