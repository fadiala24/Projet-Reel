import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifierBoutiquierPageRoutingModule } from './modifier-boutiquier-routing.module';

import { ModifierBoutiquierPage } from './modifier-boutiquier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifierBoutiquierPageRoutingModule
  ],
  declarations: [ModifierBoutiquierPage]
})
export class ModifierBoutiquierPageModule {}
