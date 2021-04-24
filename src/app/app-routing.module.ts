import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'csv-connect',
    loadChildren: () => import('./pages/csv-connect/csv-connect.module').then( m => m.CsvConnectPageModule)
  },
  {
    path: 'log-screen',
    loadChildren: () => import('./pages/log-screen/log-screen.module').then( m => m.LogScreenPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./pages/products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'tienda-nube',
    loadChildren: () => import('./pages/tienda-nube/tienda-nube.module').then( m => m.TiendaNubePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
