import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjoutBoutiquePageRoutingModule } from './ajout-boutique-routing.module';

import { AjoutBoutiquePage } from './ajout-boutique.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutBoutiquePageRoutingModule
  ],
  declarations: [AjoutBoutiquePage]
})
export class AjoutBoutiquePageModule {}
