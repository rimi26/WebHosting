import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubdbPage } from './subdb.page';

const routes: Routes = [
  {
    path: '',
    component: SubdbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubdbPageRoutingModule {}
