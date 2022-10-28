import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BranchingbreakerPageRoutingModule } from './branchingbreaker-routing.module';

import { BranchingbreakerPage } from './branchingbreaker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BranchingbreakerPageRoutingModule
  ],
  declarations: [BranchingbreakerPage]
})
export class BranchingbreakerPageModule {}
