import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EarthingPageRoutingModule } from './earthing-routing.module';

import { EarthingPage } from './earthing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EarthingPageRoutingModule
  ],
  declarations: [EarthingPage]
})
export class EarthingPageModule {}
