import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EarthingPage } from './earthing.page';

const routes: Routes = [
  {
    path: '',
    component: EarthingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EarthingPageRoutingModule {}
