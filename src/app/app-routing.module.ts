import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login-client',
    loadChildren: () => import('./client/login-client/login-client.module').then( m => m.LoginClientPageModule)
  },
  {
    path: 'register-client',
    loadChildren: () => import('./client/register-client/register-client.module').then( m => m.RegisterClientPageModule)
  },
  {
    path: 'accueil-client',
    loadChildren: () => import('./client/accueil-client/accueil-client.module').then( m => m.AccueilClientPageModule)
  },
  {
    path: 'login-boutiquier',
    loadChildren: () => import('./boutiquier/login-boutiquier/login-boutiquier.module').then( m => m.LoginBoutiquierPageModule)
  },
  {
    path: 'register-boutiquier',
    loadChildren: () => import('./boutiquier/register-boutiquier/register-boutiquier.module').then( m => m.RegisterBoutiquierPageModule)
  },
  {
    path: 'acceuil-boutiquier',
    loadChildren: () => import('./boutiquier/acceuil-boutiquier/acceuil-boutiquier.module').then( m => m.AcceuilBoutiquierPageModule)
  },
  
  {
    path: 'detail-boutique/:id',
    loadChildren: () => import('./detail-boutique/detail-boutique.module').then( m => m.DetailBoutiquePageModule)
  },
  {
    path: 'boutiques-ville/:id',
    loadChildren: () => import('./boutiques-ville/boutiques-ville.module').then( m => m.BoutiquesVillePageModule)
  },
  {
    path: 'modifier-client/:id',
    loadChildren: () => import('./client/modifier-client/modifier-client.module').then( m => m.ModifierClientPageModule)
  },
  {
    path: 'ajout-stock/:id',
    loadChildren: () => import('./boutiquier/ajout-stock/ajout-stock.module').then( m => m.AjoutStockPageModule)
  },
  {
    path: 'modifier-stock/:id',
    loadChildren: () => import('./boutiquier/modifier-stock/modifier-stock.module').then( m => m.ModifierStockPageModule)
  },
  {
    path: 'detail-stock',
    loadChildren: () => import('./boutiquier/detail-stock/detail-stock.module').then( m => m.DetailStockPageModule)
  },
  {
    path: 'modifier-boutiquier/:id',
    loadChildren: () => import('./boutiquier/modifier-boutiquier/modifier-boutiquier.module').then( m => m.ModifierBoutiquierPageModule)
  },
  {
    path: 'stock-boutique/:id',
    loadChildren: () => import('./boutiquier/stock-boutique/stock-boutique.module').then( m => m.StockBoutiquePageModule)
  },
  {
    path: 'panier',
    loadChildren: () => import('./client/panier/panier.module').then( m => m.PanierPageModule)
  },
  {
    path: 'ajout-boutique',
    loadChildren: () => import('./boutiquier/ajout-boutique/ajout-boutique.module').then( m => m.AjoutBoutiquePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
