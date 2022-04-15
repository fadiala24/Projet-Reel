import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcceuilBoutiquierPageRoutingModule } from './acceuil-boutiquier-routing.module';

import { AcceuilBoutiquierPage } from './acceuil-boutiquier.page';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcceuilBoutiquierPageRoutingModule,
    NgxPaginationModule,
  ],
  declarations: [AcceuilBoutiquierPage]
})
export class AcceuilBoutiquierPageModule {}
