import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StockBoutiquePageRoutingModule } from './stock-boutique-routing.module';

import { StockBoutiquePage } from './stock-boutique.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StockBoutiquePageRoutingModule
  ],
  declarations: [StockBoutiquePage]
})
export class StockBoutiquePageModule {}
