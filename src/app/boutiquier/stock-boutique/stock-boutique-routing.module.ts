import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockBoutiquePage } from './stock-boutique.page';

const routes: Routes = [
  {
    path: '',
    component: StockBoutiquePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockBoutiquePageRoutingModule {}
