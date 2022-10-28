import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },

  {
    path: 'firstpage',
    loadChildren: () => import('./firstpage/firstpage.module').then( m => m.FirstpagePageModule)
  },
  {
    path: '',
    redirectTo: 'firstpage',
    pathMatch: 'full'
  },
  {
    path: 'phaseselection',
    loadChildren: () => import('./phaseselection/phaseselection.module').then( m => m.PhaseselectionPageModule)
  },
  {
    path: 'onephase',
    loadChildren: () => import('./onephase/onephase.module').then( m => m.OnephasePageModule)
  },
  {
    path: 'threephase',
    loadChildren: () => import('./threephase/threephase.module').then( m => m.ThreephasePageModule)
  },
  {
    path: 'optionlist',
    loadChildren: () => import('./optionlist/optionlist.module').then( m => m.OptionlistPageModule)
  },
  {
    path: 'mainsbreaker',
    loadChildren: () => import('./mainsbreaker/mainsbreaker.module').then( m => m.MainsbreakerPageModule)
  },
  {
    path: 'branchingbreaker',
    loadChildren: () => import('./branchingbreaker/branchingbreaker.module').then( m => m.BranchingbreakerPageModule)
  },
  {
    path: 'evdedicatedprotection',
    loadChildren: () => import('./evdedicatedprotection/evdedicatedprotection.module').then( m => m.EvdedicatedprotectionPageModule)
  },
  {
    path: 'subdb',
    loadChildren: () => import('./subdb/subdb.module').then( m => m.SubdbPageModule)
  },
  {
    path: 'earthing',
    loadChildren: () => import('./earthing/earthing.module').then( m => m.EarthingPageModule)
  },
  {
    path: 'wiring',
    loadChildren: () => import('./wiring/wiring.module').then( m => m.WiringPageModule)
  },
  {
    path: 'wiringimages',
    loadChildren: () => import('./wiringimages/wiringimages.module').then( m => m.WiringimagesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
