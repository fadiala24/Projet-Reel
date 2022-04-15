import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailStockPageRoutingModule } from './detail-stock-routing.module';

import { DetailStockPage } from './detail-stock.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailStockPageRoutingModule
  ],
  declarations: [DetailStockPage]
})
export class DetailStockPageModule {}
