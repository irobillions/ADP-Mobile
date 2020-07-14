import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '../../models/user.model';
import {OrderInterface} from '../../models/order.interface';
import {Subscription} from 'rxjs';
import {UserService} from '../../services/auth/user.service';
import {OrderService} from '../../services/order/order.service';
import {AlertController, NavController, PopoverController} from '@ionic/angular';
import {PopoverAddressMenuComponent} from '../../component/popover-address-menu/popover-address-menu.component';
import {ProvidersService} from '../../services/utils/providers.service';
import {element} from 'protractor';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit, OnDestroy {
  profileType = 'order';
  user: User;
  Orders: OrderInterface[] = [];
  OrderSubscription: Subscription;
  filterBy = 'all';
  filterByWhen = 'month';
  constructor(private userService: UserService,
              private orderService: OrderService,
              private popoverController: PopoverController,
              private alertController: AlertController,
              private navController: NavController,
              private providersService: ProvidersService) { }

  ngOnInit() {}

  ionViewWillEnter() {
    this.OrderSubscription = this.orderService.OrderSubject.subscribe(
        (OrderList: OrderInterface[]) => {
          console.log(OrderList);
          this.Orders = OrderList;
        }
    );
    this.orderService.emitAddress();
    this.user = this.userService.getAuthenticatedUser();
  }

  filterOrder(arr, filter) {
    if (filter === 'processed') {
      const tab = arr.filter((el) => {
        if (el.orderStatus === 'processed') {
          return true;
        }
      });
    } else if (filter === 'canceled') {
      const tab = arr.filter((el) => {
        if (el.orderStatus === 'canceled') {
          return true;
        }
      });
    } else {
      return arr;
 }

  }
  async createPopOver(ev, id) {
    const popover = await this.popoverController.create({
      component: PopoverAddressMenuComponent,
      backdropDismiss: true,
      translucent: true,
      event: ev,
      componentProps: {
        addressId: id
      }
    });
    return await popover.present();
  }
  async presentAlert(error) {
    const alert = await this.alertController.create({
      header: 'Error',
      // tslint:disable-next-line:max-line-length
      message: 'Error occured when adding new address! Sorry' + '<ion-icon color="warning" ios="sad-outline" md="sad-sharp"></ion-icon>' +
          '<br>' + ' You can retry later',
      buttons: [
        {
          text: 'Okay',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (err) => {
            console.log('Error to add new address' + err);
          }
        }
      ]
    });
    await alert.present();
  }

  goToFilterPage() {
    this.navController.navigateForward('/order-filter');
  }
  segmentChanged($event) {
    console.log('event', $event);
    this.profileType = $event.detail.value;
  }

  ngOnDestroy() {
    this.OrderSubscription.unsubscribe();
  }
}
