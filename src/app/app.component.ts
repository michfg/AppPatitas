import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Inicio',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Adoptar',
      url: '/list',
      icon: 'paw'
    },
    {
      title: 'Mi mascota ideal',
      url: '/mascota-ideal',
      icon: 'heart'
    },
    {
      title: 'Veterinarias',
      url: '/veterinaria',
      icon: 'pin',
    },
    {
      title: 'Primeros Auxilios',
      url: '/primeros-auxilios',
      icon: 'medical',
    },
    {
      title: 'Entrenamientos',
      url: '/entrenamientos',
      icon: 'baseball',
    },
    {
      title: 'Tiendas',
      url: '/veterinaria',
      icon: 'pricetags',
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
