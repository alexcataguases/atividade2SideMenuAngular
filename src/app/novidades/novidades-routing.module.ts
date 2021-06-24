import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovidadesPage } from './novidades.page';

const routes: Routes = [
  {
    path: '',
    component: NovidadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovidadesPageRoutingModule {}
