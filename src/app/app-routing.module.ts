import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'veterinaria',
   loadChildren: './veterinaria/veterinaria.module#VeterinariaPageModule' 
  },
  { path: 'mascota-ideal',
   loadChildren: './mascota-ideal/mascota-ideal.module#MascotaIdealPageModule' 
  },
  { 
    path: 'dar-en-adopcion', 
    loadChildren: './dar-en-adopcion/dar-en-adopcion.module#DarEnAdopcionPageModule' 
  },
  { 
    path: 'primeros-auxilios', 
    loadChildren: './primeros-auxilios/primeros-auxilios.module#PrimerosAuxiliosPageModule' },
  { 
    path: 'entrenamientos', 
    loadChildren: './entrenamientos/entrenamientos.module#EntrenamientosPageModule' 
  },
  { 
    path: 'tienda', 
    loadChildren: './tienda/tienda.module#TiendaPageModule' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
