import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'novidades',
    pathMatch: 'full'
  },
  {
    path: 'novidades',
    loadChildren: () => import('./novidades/novidades.module').then( m => m.NovidadesPageModule)
  },
  {
    path: 'sorvetes',
    loadChildren: () => import('./sorvetes/sorvetes.module').then( m => m.SorvetesPageModule)
  },
  {
    path: 'encomendas',
    loadChildren: () => import('./encomendas/encomendas.module').then( m => m.EncomendasPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
