import {Component, OnInit} from '@angular/core';

import {MenuController, Platform} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Votre liste de souhait',
      url: '/folder/Inbox',
      icon: 'heart'
    },
    {
      title: 'Votre compte',
      url: '/user-account',
      icon: 'person'
    },
    {
      title: 'Vos devis',
      url: '/folder/Favorites',
      icon: 'clipboard'
    },
    {
      title: 'Vos abonnements',
      url: '/folder/Archived',
      icon: 'list'
    },
    {
      title: 'messagerie',
      url: '/folder/Trash',
      icon: 'mail'
    }
  ];
  public labels = ['Demander un devis', 'Promotions et ventes', 'Soumettre une demande ', 'Contacter un expert'];
  public others = ['paramètres', 'Notez l\'appli'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
