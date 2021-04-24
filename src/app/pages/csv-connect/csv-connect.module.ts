import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CsvConnectPageRoutingModule } from './csv-connect-routing.module';

import { CsvConnectPage } from './csv-connect.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CsvConnectPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CsvConnectPage]
})
export class CsvConnectPageModule {}
