import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogScreenPage } from './log-screen.page';

const routes: Routes = [
  {
    path: '',
    component: LogScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogScreenPageRoutingModule {}
