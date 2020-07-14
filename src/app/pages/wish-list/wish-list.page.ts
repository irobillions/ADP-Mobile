import { Component, OnInit } from '@angular/core';
import {ModalController, NavController} from '@ionic/angular';
import {WishListFormComponent} from '../../component/wish-list-form/wish-list-form.component';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.page.html',
  styleUrls: ['./wish-list.page.scss'],
})
export class WishListPage implements OnInit {

  constructor(private navController: NavController, private modalController: ModalController) { }

  ngOnInit() {
  }

  goWishList() {
    this.navController.navigateForward('/wishlist-item-list');
  }


  async wishListForm() {
    const modal = await this.modalController.create({
      component: WishListFormComponent,
      animated: true,
      cssClass: 'cart-modal'
    });
    await modal.present();
  }
}
