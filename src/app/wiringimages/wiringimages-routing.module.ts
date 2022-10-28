import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WiringimagesPage } from './wiringimages.page';

const routes: Routes = [
  {
    path: '',
    component: WiringimagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WiringimagesPageRoutingModule {}
