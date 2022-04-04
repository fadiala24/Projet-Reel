import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttenteDetailComponent } from './attente-detail.component';

describe('AttenteDetailComponent', () => {
  let component: AttenteDetailComponent;
  let fixture: ComponentFixture<AttenteDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttenteDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttenteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
