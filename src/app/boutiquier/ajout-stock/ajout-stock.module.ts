import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutStockPageRoutingModule } from './ajout-stock-routing.module';

import { AjoutStockPage } from './ajout-stock.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutStockPageRoutingModule
  ],
  declarations: [AjoutStockPage]
})
export class AjoutStockPageModule {}
