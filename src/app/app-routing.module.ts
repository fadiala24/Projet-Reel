import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AddAdminComponent } from './admin/add-admin/add-admin.component';
import { DetailAdminComponent } from './admin/detail-admin/detail-admin.component';
import { ListAdminComponent } from './admin/list-admin/list-admin.component';
import { UpdateAdminComponent } from './admin/update-admin/update-admin.component';
import { AddBoutiqueComponent } from './boutique/add-boutique/add-boutique.component';
import { AttenteDetailComponent } from './boutique/attente-detail/attente-detail.component';
import { BoutiqueAttenteComponent } from './boutique/boutique-attente/boutique-attente.component';
import { DetailBoutiqueComponent } from './boutique/detail-boutique/detail-boutique.component';
import { ListBoutiqueComponent } from './boutique/list-boutique/list-boutique.component';
import { UpdateBoutiqueComponent } from './boutique/update-boutique/update-boutique.component';
import { AddBoutiquierComponent } from './boutiquier/add-boutiquier/add-boutiquier.component';
import { BoutiquierAttenteComponent } from './boutiquier/boutiquier-attente/boutiquier-attente.component';
import { DetailBoutiquierComponent } from './boutiquier/detail-boutiquier/detail-boutiquier.component';
import { ListBoutiquierComponent } from './boutiquier/list-boutiquier/list-boutiquier.component';
import { UpdateBoutiquierComponent } from './boutiquier/update-boutiquier/update-boutiquier.component';
import { AddCategoryComponent } from './Category/add-category/add-category.component';
import { DetailCategoryComponent } from './Category/detail-category/detail-category.component';
import { ListCategoryComponent } from './Category/list-category/list-category.component';
import { UpdateCategoryComponent } from './Category/update-category/update-category.component';
import { CorbeilleComponent } from './corbeille/corbeille/corbeille.component';
import { GuardGuard } from './Guard/guard.guard';
import { LoginGuardGuard } from './Guard/login-guard.guard';
import { AddlocaliteComponent } from './localite/addlocalite/addlocalite.component';
import { DetaillocaliteComponent } from './localite/detaillocalite/detaillocalite.component';
import { ListlocaliteComponent } from './localite/listlocalite/listlocalite.component';
import { UpdatelocaliteComponent } from './localite/updatelocalite/updatelocalite.component';
import { LoginComponent } from './login/login.component';
import { AddProduitComponent } from './produit/add-produit/add-produit.component';
import { DetailProduitComponent } from './produit/detail-produit/detail-produit.component';
import { ListProduitComponent } from './produit/list-produit/list-produit.component';
import { UpdateProduitComponent } from './produit/update-produit/update-produit.component';



const routes: Routes = [

 { path: '', component: LoginComponent,},
  { path: 'login', component: LoginComponent},
  { path: 'accueil', component: AccueilComponent, canActivate: [GuardGuard] },
  {path: 'listAdmin', component: ListAdminComponent, canActivate: [GuardGuard]},
  {path: 'addAdmin', component: AddAdminComponent, canActivate: [GuardGuard]},
  {path: 'updateAdmin/:id', component: UpdateAdminComponent, canActivate: [GuardGuard]},
  {path: 'detailAdmin/:id', component: DetailAdminComponent, canActivate: [GuardGuard]},

  {path: 'addBoutique', component: AddBoutiqueComponent, canActivate: [GuardGuard]},
  {path: 'listBoutique', component: ListBoutiqueComponent, canActivate: [GuardGuard]},
  {path: 'detailBoutique/:id', component: DetailBoutiqueComponent, canActivate: [GuardGuard]},
  {path: 'updateBoutique/:id', component: UpdateBoutiqueComponent, canActivate: [GuardGuard]},

  {path: 'listBoutiqueAttente', component: BoutiqueAttenteComponent, canActivate: [GuardGuard]},
  {path: 'AttenteDetail/:id', component: AttenteDetailComponent, canActivate: [GuardGuard]},

  {path: 'addProduit', component: AddProduitComponent, canActivate: [GuardGuard]},
  {path: 'listProduit', component: ListProduitComponent, canActivate: [GuardGuard]},
  {path: 'detailProduit/:id', component: DetailProduitComponent, canActivate: [GuardGuard]},
  {path: 'updateProduit/:id', component: UpdateProduitComponent, canActivate: [GuardGuard]},

  {path: 'addBoutiquier', component: AddBoutiquierComponent, canActivate: [GuardGuard]},
  {path: 'listBoutiquier', component: ListBoutiquierComponent, canActivate: [GuardGuard]},
  {path: 'detailBoutiquier/:id', component: DetailBoutiquierComponent, canActivate: [GuardGuard]},
  {path: 'updateBoutiquier/:id', component: UpdateBoutiquierComponent, canActivate: [GuardGuard]},

  {path: 'addCategorie', component: AddCategoryComponent, canActivate: [GuardGuard]},
  {path: 'listCategorie', component: ListCategoryComponent, canActivate: [GuardGuard]},
  {path: 'detailCategorie/:id', component: DetailCategoryComponent, canActivate: [GuardGuard]},
  {path: 'updateCategorie/:id', component: UpdateCategoryComponent, canActivate: [GuardGuard]},

  {path: 'addLocalite', component: AddlocaliteComponent, canActivate: [GuardGuard]},
  {path: 'listLocalite', component: ListlocaliteComponent, canActivate: [GuardGuard]},
  {path: 'detailLocalite/:id', component: DetaillocaliteComponent, canActivate: [GuardGuard]},
  {path: 'updateLocalite/:id', component: UpdatelocaliteComponent, canActivate: [GuardGuard]},

  {path: 'corbeille', component: CorbeilleComponent, canActivate: [GuardGuard]},






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
