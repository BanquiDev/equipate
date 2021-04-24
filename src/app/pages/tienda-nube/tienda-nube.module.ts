import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TiendaNubePageRoutingModule } from './tienda-nube-routing.module';

import { TiendaNubePage } from './tienda-nube.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TiendaNubePageRoutingModule
  ],
  declarations: [TiendaNubePage]
})
export class TiendaNubePageModule {}
