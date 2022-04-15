import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailBoutiquePage } from './detail-boutique.page';

const routes: Routes = [
  {
    path: '',
    component: DetailBoutiquePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailBoutiquePageRoutingModule {}
