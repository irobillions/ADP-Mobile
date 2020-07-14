import {Component, OnInit, ViewChild} from '@angular/core';
import {CartService} from '../../services/cart/cart.service';
import {AlertController, IonItemSliding, ModalController} from '@ionic/angular';
import {BehaviorSubject} from 'rxjs';
import {CartCheckoutModalPage} from '../cart-checkout-modal/cart-checkout-modal.page';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  @ViewChild(IonItemSliding, {static: false}) slidingItem: IonItemSliding;
  constructor(private cartService: CartService, private modalController: ModalController, private alertController: AlertController) { }

  cart = [];
  products = [];
  cartITemCount: BehaviorSubject<number>;
  totalAmount = 0;
  summary = 0;
  delivery = 0;

  ngOnInit() {
    this.products = this.cartService.getProducts();
    this.cartService.getCart().then(
       res => {
          this.cart = res;
          if (this.cart.length !== 0 ) {
              for (const a of this.cart) {
                  this.delivery += a.deliveryFeed;
                  this.totalAmount +=  a.amount;
              }
              this.summary = this.totalAmount + this.delivery;
          }
       }
   );
    this.cartITemCount = this.cartService.getCartItemCount();
  }

  ionViewWillLeave() {
      this.cartService.saveCart(this.cart).then(r => console.log('cart has been saved'));
  }
    async presentAlert(article, i) {
        const alert = await this.alertController.create({
            header: 'Delete this article?',
            // tslint:disable-next-line:max-line-length
            message: 'Voulez vous vraiment supprimer cette article?' + '<ion-icon color="warning" ios="sad-outline" md="sad-sharp"></ion-icon>',
            buttons: [
                {
                    text: 'agree',
                    role: 'agree',
                    cssClass: 'secondary',
                    handler: () => {
                        this.deleteArticle(article, i);
                        console.log('article deleted');
                    }
                },
                {
                    text: 'cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                        this.slidingItem.close();
                        console.log('article not deleted');
                    }
                }
            ]
        });
        await alert.present();
    }
  decreaseProductAmount(product, i: number)  {
    this.cartService.decreaseProductAmount(product).then(
        () => {
          console.log('ok');
          if (product.qty === 0) {
              this.deleteArticle(product, i);
          }
            this.cartService.saveCart(this.cart);
        }
    );
    this.totalAmount -= Number(product.item.price);
    this.summary = this.totalAmount + this.delivery;
  }

  increaseProductAmount(product) {
      this.cartService.increaseProductAmount(product).then(
          () => {
              console.log('ok');
              this.cartService.saveCart(this.cart);
          }
      );
      this.totalAmount += Number(product.item.price);
      this.summary = this.totalAmount + this.delivery;
  }
    /***
     *     this.cartService.getCart().then(
     res => {
                this.cart = res;
                console.log('cart', res);
                if (res.length !== 0 ) {
                      for (const a of this.cart) {
                          this.delivery += a.deliveryFeed;
                          this.totalAmount +=  a.amount;
                      }
                      this.summary = this.totalAmount + this.delivery;
                }
              });**/
  deleteArticle(article, i: number) {
    this.cartService.remove(i, article).then(
        () => {
            if (this.cart.length !== 0 ) {
                this.delivery -= article.deliveryFeed;
                this.totalAmount -=  article.amount;
                this.summary = this.totalAmount + this.delivery;
            }
            this.cartITemCount = this.cartService.getCartItemCount();
        }
    );
  }
  async openCart() {
      const modal = await this.modalController.create({
          component: CartCheckoutModalPage,
          cssClass: 'cart-modal',
          animated: true,
          componentProps: {
              cart: this.cart,
              total: this.summary,
              delivery: this.delivery
          }
      });

      await modal.present();
    }
}
