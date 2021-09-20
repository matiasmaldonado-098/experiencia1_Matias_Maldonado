import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./pages/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./pages/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'iniciosesion',
    loadChildren: () => import('./pages/iniciosesion/iniciosesion.module').then( m => m.IniciosesionPageModule)
  },
  {
    path: 're-zero',
    loadChildren: () => import('./pages/re-zero/re-zero.module').then( m => m.ReZeroPageModule)
  },
  {
    path: 'himouto-umaru-cha',
    loadChildren: () => import('./pages/himouto-umaru-cha/himouto-umaru-cha.module').then( m => m.HimoutoUmaruChaPageModule)
  },
  {
    path: 'the-rising-of-the-shield-hero',
    loadChildren: () => import('./pages/the-rising-of-the-shield-hero/the-rising-of-the-shield-hero.module').then( m => m.TheRisingOfTheShieldHeroPageModule)
  },
  {
    path: 'darling-in-the-franxx',
    loadChildren: () => import('./pages/darling-in-the-franxx/darling-in-the-franxx.module').then( m => m.DarlingInTheFranxxPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
