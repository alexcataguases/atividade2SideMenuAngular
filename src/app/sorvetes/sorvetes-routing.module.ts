import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SorvetesPage } from './sorvetes.page';

const routes: Routes = [
  {
    path: '',
    component: SorvetesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SorvetesPageRoutingModule {}
