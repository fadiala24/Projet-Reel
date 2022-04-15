import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AcceuilBoutiquierPage } from './acceuil-boutiquier.page';

describe('AcceuilBoutiquierPage', () => {
  let component: AcceuilBoutiquierPage;
  let fixture: ComponentFixture<AcceuilBoutiquierPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceuilBoutiquierPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AcceuilBoutiquierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
