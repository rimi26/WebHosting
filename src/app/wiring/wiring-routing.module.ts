import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WiringPage } from './wiring.page';

const routes: Routes = [
  {
    path: '',
    component: WiringPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WiringPageRoutingModule {}
