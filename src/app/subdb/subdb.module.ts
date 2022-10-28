import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubdbPageRoutingModule } from './subdb-routing.module';

import { SubdbPage } from './subdb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubdbPageRoutingModule
  ],
  declarations: [SubdbPage]
})
export class SubdbPageModule {}
