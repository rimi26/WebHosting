import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnephasePage } from './onephase.page';

const routes: Routes = [
  {
    path: '',
    component: OnephasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnephasePageRoutingModule {}
