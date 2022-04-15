import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterBoutiquierPageRoutingModule } from './register-boutiquier-routing.module';

import { RegisterBoutiquierPage } from './register-boutiquier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterBoutiquierPageRoutingModule
  ],
  declarations: [RegisterBoutiquierPage]
})
export class RegisterBoutiquierPageModule {}
