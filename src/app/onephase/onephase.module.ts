import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnephasePageRoutingModule } from './onephase-routing.module';

import { OnephasePage } from './onephase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnephasePageRoutingModule
  ],
  declarations: [OnephasePage]
})
export class OnephasePageModule {}
