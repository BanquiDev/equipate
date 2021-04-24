import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CsvConnectPage } from './csv-connect.page';

const routes: Routes = [
  {
    path: '',
    component: CsvConnectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CsvConnectPageRoutingModule {}
