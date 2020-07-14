import {Component, OnDestroy, OnInit} from '@angular/core';
import {CategoryService} from '../services/category/category.service';
import {Category} from '../models/CategoryI.model';
import {Subscription} from 'rxjs';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit, OnDestroy {
  categories: Category[];
  categorySubscription: Subscription;
  constructor(private categoryService: CategoryService,
              private navController: NavController) {}

  ngOnInit() {
    this.categorySubscription = this.categoryService.categorySubject.subscribe(
        (catList: Category[]) => {
          console.log(catList);
          this.categories = catList;
        }
    );
  }

  ionViewCanEnter() {
    this.categorySubscription = this.categoryService.categorySubject.subscribe(
        (catList: Category[]) => {
          console.log(catList);
          this.categories = catList;
        }
    );
  }

  goOnProductListPage(categoryId: number, categoryName: string) {
    this.navController.navigateForward(`/product-list/${categoryName}`);
  }

  ngOnDestroy() {
    this.categorySubscription.unsubscribe();
  }
}
