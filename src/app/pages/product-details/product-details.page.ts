import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../services/product/product.service';
import {IonButton, NavController, ToastController} from '@ionic/angular';
import {CartService} from '../../services/cart/cart.service';
import {error} from 'util';
import {fakeAsync} from '@angular/core/testing';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  topStories: any;
  productId: number;
  product: any;
  productAmount = 1;
  carCompt: any[] = [];
  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private toastController: ToastController,
              private cartService: CartService,
              private navController: NavController) {
    this.topStories = [
      {title: 'Exploring San Francisco', author: 'Rea Ramsey', body: '', picture: 'https://picsum.photos/500/400?image=693'},
      {title: 'Coffee the right way', author: 'Ellesha Hartley', body: '', picture: 'https://picsum.photos/500/400?image=1060'},
      {title: 'Best Hiking In Yosemite', author: 'Vinnie Alexander', body: '', picture: 'https://picsum.photos/500/400?image=1043'},
      {title: 'Astro Photography Guide', author: 'Greg Rakozy', body: '', picture: 'https://picsum.photos/500/400?image=903'}
    ];
  }

  ngOnInit() {
    this.productId = this.activatedRoute.snapshot.params.id;
    this.getProductDetails(this.productId);
  }

  async presentToast(msg, dur, clr) {
    const toast = await this.toastController.create({
      message: msg,
      duration: dur,
      color: clr
    });
    await toast.present();
  }

  getProductDetails(id: number) {
    this.productService.getSingleProduct(id).subscribe(
        res => {
          this.product = res;
          this.getProductCarComp();
        }, err => {
          console.log('failed to load product details' + err);
          this.presentToast('Failed to Load Product details Sorry!', 2000, 'danger');
        }
    );
  }

  getProductCarComp() {
    for (const o of this.product.car_comp) {
      this.productService.getCarModelsDetails(o.modelId).subscribe(
          res => {
            this.carCompt.push(res);
            console.log(this.carCompt);
          }
      );
    }
  }

  addProductToCart(product, qte) {
    this.cartService.addProduct(product, qte).then(
        res => {
          console.log('ajout reussie');
        },
        err => {
          console.log(err);
        }
    );
  }

  increaseAmount() {
    this.productAmount += 1;
  }

  decreaseAmount() {
    this.productAmount -= 1;
  }

    SellerProfile() {
      this.navController.navigateForward('/seller-profile')
    }
}
