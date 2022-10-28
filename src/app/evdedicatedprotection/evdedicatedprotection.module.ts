import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvdedicatedprotectionPageRoutingModule } from './evdedicatedprotection-routing.module';

import { EvdedicatedprotectionPage } from './evdedicatedprotection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EvdedicatedprotectionPageRoutingModule
  ],
  declarations: [EvdedicatedprotectionPage]
})
export class EvdedicatedprotectionPageModule {}
