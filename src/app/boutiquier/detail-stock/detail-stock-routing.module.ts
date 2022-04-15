import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailStockPage } from './detail-stock.page';

const routes: Routes = [
  {
    path: '',
    component: DetailStockPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailStockPageRoutingModule {}
