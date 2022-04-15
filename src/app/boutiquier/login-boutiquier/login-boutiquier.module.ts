import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginBoutiquierPageRoutingModule } from './login-boutiquier-routing.module';

import { LoginBoutiquierPage } from './login-boutiquier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginBoutiquierPageRoutingModule
  ],
  declarations: [LoginBoutiquierPage]
})
export class LoginBoutiquierPageModule {}
