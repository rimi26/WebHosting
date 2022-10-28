import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvdedicatedprotectionPage } from './evdedicatedprotection.page';

const routes: Routes = [
  {
    path: '',
    component: EvdedicatedprotectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvdedicatedprotectionPageRoutingModule {}
