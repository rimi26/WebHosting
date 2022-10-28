import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainsbreakerPageRoutingModule } from './mainsbreaker-routing.module';

import { MainsbreakerPage } from './mainsbreaker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainsbreakerPageRoutingModule
  ],
  declarations: [MainsbreakerPage]
})
export class MainsbreakerPageModule {}
