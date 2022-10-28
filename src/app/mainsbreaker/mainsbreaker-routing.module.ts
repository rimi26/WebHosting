import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainsbreakerPage } from './mainsbreaker.page';

const routes: Routes = [
  {
    path: '',
    component: MainsbreakerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainsbreakerPageRoutingModule {}
