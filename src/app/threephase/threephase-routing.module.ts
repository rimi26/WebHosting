import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThreephasePage } from './threephase.page';

const routes: Routes = [
  {
    path: '',
    component: ThreephasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThreephasePageRoutingModule {}
