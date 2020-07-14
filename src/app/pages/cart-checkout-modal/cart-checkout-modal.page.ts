import {Component, Input, OnInit} from '@angular/core';
import {ModalController, NavController} from '@ionic/angular';
import {ItemCartModel} from '../../models/Item-cart.model';

@Component({
  selector: 'app-cart-checkout-modal',
  templateUrl: './cart-checkout-modal.page.html',
  styleUrls: ['./cart-checkout-modal.page.scss'],
})
export class CartCheckoutModalPage implements OnInit {
  @Input() cart: ItemCartModel[];
  @Input() total: number;
  @Input() delivery: number;

  constructor(private modalController: ModalController, private navController: NavController) { }

  ngOnInit() {
  }
  close() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

  confirmCart() {
    this.navController.navigateForward('/checkout-process');
    this.close();
  }
}
