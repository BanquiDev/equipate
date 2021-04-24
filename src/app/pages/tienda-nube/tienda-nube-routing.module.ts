import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TiendaNubePage } from './tienda-nube.page';

const routes: Routes = [
  {
    path: '',
    component: TiendaNubePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TiendaNubePageRoutingModule {}
