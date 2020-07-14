import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../services/product/product.service';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.page.html',
  styleUrls: ['./comment-list.page.scss'],
})
export class CommentListPage implements OnInit {

  productId: number;
  product: any;
  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private toastController: ToastController) { }

  ngOnInit() {
    this.productId = this.route.snapshot.params.id;
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
        }, err => {
          console.log('failed to load product details' + err);
          this.presentToast('Failed to Load Product comment Sorry!', 2000, 'danger');
        }
    );
  }
}
