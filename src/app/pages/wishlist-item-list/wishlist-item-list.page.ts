import { Component, OnInit } from '@angular/core';
import {AlertController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-wishlist-item-list',
  templateUrl: './wishlist-item-list.page.html',
  styleUrls: ['./wishlist-item-list.page.scss'],
})
export class WishlistItemListPage implements OnInit {

  constructor(private alertController: AlertController, private navController: NavController) { }

  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Delete this list?',
      // tslint:disable-next-line:max-line-length
      message: 'Voulez vous vraiment supprimer cette Liste?' + '<ion-icon color="warning" ios="sad-outline" md="sad-sharp"></ion-icon>',
      buttons: [
        {
          text: 'agree',
          role: 'agree',
          cssClass: 'secondary',
          handler: () => {
            console.log('article deleted');
            this.navController.navigateBack('/wish-list');
          }
        },
        {
          text: 'cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('article not deleted');
          }
        }
      ]
    });
    await alert.present();
  }
}
