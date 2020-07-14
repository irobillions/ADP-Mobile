import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OrderInterface} from '../../models/order.interface';
import {OrderItemInterface} from '../../models/orderItem.interface';
import {OrderService} from '../../services/order/order.service';
import {UserService} from '../../services/auth/user.service';
import {Address} from '../../models/address.model';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.page.html',
  styleUrls: ['./order-detail.page.scss'],
})
export class OrderDetailPage implements OnInit {
  order: OrderInterface;
  adr: Address;
  orderItems: OrderItemInterface[] = [];

  constructor(private route: ActivatedRoute,
              private orderService: OrderService,
              private userService: UserService) { }

  ngOnInit() {
      this.getOrderDetail();
  }

  getOrderDetail() {
    const id = this.route.snapshot.params.id;
    this.orderService.getSpecificOrder(id).subscribe(
        res => {
          this.order = res;
          this.orderItems = this.order.orderItems.slice();
          this.getAddressDetailForOrder(this.order.addressID);
          console.log(this.order);
        },
        error => {
          console.log('order detail failed:' + error);
          this.orderService.presentToast('failed to load order detail retry later!', 2000, 'danger');
        }
    );
  }
  getAddressDetailForOrder(id: number) {
      this.userService.getSingleAddress(id).subscribe(
          res => {
              this.adr = res;
              this.adr.cellNumber = (this.userService.getAuthenticatedUser()).cellNumber;
              console.log(this.adr);
          },
          error => {
              console.log('failed to load: ' + error);
              this.orderService.presentToast('failed to load address detail', 2000, 'danger');
          }
      );
  }
}
