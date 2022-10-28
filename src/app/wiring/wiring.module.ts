import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WiringPageRoutingModule } from './wiring-routing.module';

import { WiringPage } from './wiring.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WiringPageRoutingModule
  ],
  declarations: [WiringPage]
})
export class WiringPageModule {}
