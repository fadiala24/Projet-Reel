import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifierStockPage } from './modifier-stock.page';

const routes: Routes = [
  {
    path: '',
    component: ModifierStockPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifierStockPageRoutingModule {}
