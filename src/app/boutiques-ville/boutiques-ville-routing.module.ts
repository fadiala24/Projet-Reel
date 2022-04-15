import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoutiquesVillePage } from './boutiques-ville.page';

const routes: Routes = [
  {
    path: '',
    component: BoutiquesVillePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoutiquesVillePageRoutingModule {}
