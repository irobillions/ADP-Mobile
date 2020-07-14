import {Component, Input, OnInit} from '@angular/core';
import {ModalController, NavController} from '@ionic/angular';
import {BehaviorSubject} from 'rxjs';
import {CartService} from '../../services/cart/cart.service';
import {NotificationsPage} from '../../pages/notifications/notifications.page';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title;
  @Input() defaultBack;
  cartItemCount: BehaviorSubject<number>;
  constructor(private navController: NavController, private cartService: CartService, private modalController: ModalController) { }

  ngOnInit() {
    this.cartItemCount = this.cartService.getCartItemCount();
  }

    openCart() {
        this.navController.navigateForward('/cart');
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
