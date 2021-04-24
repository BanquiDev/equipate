import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogScreenPageRoutingModule } from './log-screen-routing.module';

import { LogScreenPage } from './log-screen.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogScreenPageRoutingModule,
    ComponentsModule
  ],
  declarations: [LogScreenPage]
})
export class LogScreenPageModule {}
