import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SorvetesPageRoutingModule } from './sorvetes-routing.module';

import { SorvetesPage } from './sorvetes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SorvetesPageRoutingModule
  ],
  declarations: [SorvetesPage]
})
export class SorvetesPageModule {}
