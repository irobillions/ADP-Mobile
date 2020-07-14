import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {ProvidersService} from '../../services/utils/providers.service';

@Component({
  selector: 'app-order-filter',
  templateUrl: './order-filter.page.html',
  styleUrls: ['./order-filter.page.scss'],
})
export class OrderFilterPage implements OnInit {

  OrderFilterList = 'all';
  OrderFilterTime = 'month';
  constructor(private navController: NavController,
              private providersService: ProvidersService) { }

  ngOnInit() {
  }

  goBack() {
    this.navController.navigateBack('/orders');
  }

  getOrderFilterList(event) {
    this.OrderFilterList = event.target.value;
  }

  getOrderFilterTime(event) {
    this.OrderFilterTime = event.target.value;
  }

  filterOrder() {
    this.providersService.obj = { filterOnOrder: this.OrderFilterList, filterOnTime: this.OrderFilterTime };
    this.navController.navigateBack('/orders').then(
        () => {
          this.providersService.clear();
        }
    );
  }
}
