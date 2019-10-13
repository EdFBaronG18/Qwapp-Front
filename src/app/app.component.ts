import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
 public appPages = [
    {
      title: 'Iniciar Sesion',
      url: '/login',
      icon: 'home'
    },
    {
      title: 'Registro',
      url: '/register',
      icon: 'home'
    },
    {
      title: 'Perfil',
      url: '/perfil',
      icon: 'home'
    },
    {
      title: 'Editar Perfil',
      url: '/perfil-edit',
      icon: 'home'
    },
    {
      title: 'Ver Producto',
      url: '/producto',
      icon: 'home'
    },
    {
      title: 'Editar Producto',
      url: '/producto-edit',
      icon: 'home'
    },
    {
      title: 'Ver Chat',
      url: '/chat-mesaje',
      icon: 'home'
    },
    {
      title: 'Chats',
      url: '/chat-lista',
      icon: 'home'
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
