import { Component, OnInit } from '@angular/core';
import {ModalController, NavController} from '@ionic/angular';
import {BehaviorSubject} from 'rxjs';
import {CartService} from '../../services/cart/cart.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  cartItemCount: BehaviorSubject<number>;
  constructor(private navController: NavController, private cartService: CartService, private modalController: ModalController) { }

  ngOnInit() {
    this.cartItemCount = this.cartService.getCartItemCount();
  }
  openCart() {
    this.navController.navigateForward('/cart');
    this.close();
  }
  close() {
    this.modalController.dismiss({
      dismissed: true
    });
  }
}
