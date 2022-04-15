import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcceuilBoutiquierPage } from './acceuil-boutiquier.page';

const routes: Routes = [
  {
    path: '',
    component: AcceuilBoutiquierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcceuilBoutiquierPageRoutingModule {}
