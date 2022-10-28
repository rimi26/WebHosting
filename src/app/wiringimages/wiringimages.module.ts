import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WiringimagesPageRoutingModule } from './wiringimages-routing.module';

import { WiringimagesPage } from './wiringimages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WiringimagesPageRoutingModule
  ],
  declarations: [WiringimagesPage]
})
export class WiringimagesPageModule {}
