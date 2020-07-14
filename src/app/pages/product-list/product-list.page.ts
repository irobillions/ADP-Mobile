import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../services/product/product.service';
import {Subject, Subscription} from 'rxjs';
import {NavController} from '@ionic/angular';
import {CartService} from '../../services/cart/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit{

  productList: any[];
  partList: any[];
  allProduct = new Subject<any[]>();
  productSubscription: Subscription;
  categoryName: string;
  isGrid = false;
  allProductList: any[];
  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private navController: NavController,
              private cartService: CartService) {
    this.categoryName = this.activatedRoute.snapshot.params.name;
  }

  ngOnInit() {
    this.productService.getAllProductPartForSpecificCategory(this.categoryName).subscribe(
        res => {
            this.productList = res;
            console.log(this.productList);
        },
        error => {
            console.log('failed to load product' + error);
        }
    );
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
    onChange() {
        this.isGrid = !this.isGrid;
    }

    filter() {
        this.navController.navigateForward('/filter-product');
    }

    goOnProductDetail(id: number) {
      this.navController.navigateForward(`/product-details/${id}`);
    }
}
