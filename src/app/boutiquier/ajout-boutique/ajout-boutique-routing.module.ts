import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutBoutiquePage } from './ajout-boutique.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutBoutiquePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutBoutiquePageRoutingModule {}
