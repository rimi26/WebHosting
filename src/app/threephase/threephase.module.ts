import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThreephasePageRoutingModule } from './threephase-routing.module';

import { ThreephasePage } from './threephase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThreephasePageRoutingModule
  ],
  declarations: [ThreephasePage]
})
export class ThreephasePageModule {}
