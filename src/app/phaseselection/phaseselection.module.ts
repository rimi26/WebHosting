import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhaseselectionPageRoutingModule } from './phaseselection-routing.module';

import { PhaseselectionPage } from './phaseselection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhaseselectionPageRoutingModule
  ],
  declarations: [PhaseselectionPage]
})
export class PhaseselectionPageModule {}
