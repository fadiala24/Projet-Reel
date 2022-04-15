import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifierStockPageRoutingModule } from './modifier-stock-routing.module';

import { ModifierStockPage } from './modifier-stock.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifierStockPageRoutingModule
  ],
  declarations: [ModifierStockPage]
})
export class ModifierStockPageModule {}
