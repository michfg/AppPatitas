import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PrimerosAuxiliosPage } from './primeros-auxilios.page';

const routes: Routes = [
  {
    path: '',
    component: PrimerosAuxiliosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PrimerosAuxiliosPage]
})
export class PrimerosAuxiliosPageModule {}
