import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MascotaIdealPage } from './mascota-ideal.page';

const routes: Routes = [
  {
    path: '',
    component: MascotaIdealPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MascotaIdealPage]
})
export class MascotaIdealPageModule {}
