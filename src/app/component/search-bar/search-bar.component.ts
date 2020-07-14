import { Component, OnInit } from '@angular/core';
import {ModalController, NavController} from '@ionic/angular';
import {ModalSearchPagePage} from '../modal-search-page/modal-search-page.page';
import {CartService} from '../../services/cart/cart.service';
import {BehaviorSubject} from 'rxjs';
import {NotificationsPage} from '../../pages/notifications/notifications.page';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  cartItemCount: BehaviorSubject<number>;
  result: any[] = [{
    title: 'object',
    des: 'ccc'
  }];
  constructor(private modalController: ModalController, private navController: NavController, private cartService: CartService) { }

  ngOnInit() {
    this.cartItemCount = this.cartService.getCartItemCount();
  }

  openCart() {
    this.navController.navigateForward('/cart');
    this.close();
  }
  async openSearchModal() {
    const modal = await this.modalController.create({
      component: ModalSearchPagePage,
      componentProps: {
          result: this.result
      }
    });
    await modal.present();
  }
  async openNotificationModal() {
    const modal = await this.modalController.create({
      component: NotificationsPage,
      animated: true
    });
    await modal.present();
  }
  close() {
    this.modalController.dismiss({
      dismissed: true
    });
  }
}
