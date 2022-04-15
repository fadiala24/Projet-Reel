import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifierBoutiquierPage } from './modifier-boutiquier.page';

const routes: Routes = [
  {
    path: '',
    component: ModifierBoutiquierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifierBoutiquierPageRoutingModule {}
