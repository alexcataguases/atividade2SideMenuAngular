import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovidadesPageRoutingModule } from './novidades-routing.module';

import { NovidadesPage } from './novidades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovidadesPageRoutingModule
  ],
  declarations: [NovidadesPage]
})
export class NovidadesPageModule {}
